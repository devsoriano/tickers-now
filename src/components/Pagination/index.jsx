import { useContext } from "react";
import { TickerViewContext } from "../../context";
import "./styles.scss";

export const Pagination = () => {
  const context = useContext(TickerViewContext);
  const { currentPage, setCurrentPage, totalItems, itemsPerPage } = context;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>Back</button>
      )}
      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};
