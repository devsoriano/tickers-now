import { createContext, useEffect, useState } from "react";

export const TickerViewContext = createContext();

// eslint-disable-next-line react/prop-types
export const TickerViewProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 5;
  const offset = currentPage - 1;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tickers/${itemsPerPage}/${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.modifiedData);
        setPagination(data.pagination);
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <TickerViewContext.Provider
      value={{
        data,
        currentPage,
        setCurrentPage,
        totalItems: pagination.total,
        itemsPerPage,
        isLoading,
      }}
    >
      {children}
    </TickerViewContext.Provider>
  );
};
