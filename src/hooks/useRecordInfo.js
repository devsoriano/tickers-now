import { useState, useEffect } from "react";

export const useRecordInfo = (symbol) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const [selectedDate, setSelectedDate] = useState(yesterday);
  const [recordData, setRecordData] = useState(null);

  useEffect(() => {
    const formattedDate = formatDate(selectedDate);

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/pastday/${symbol}/eod/date/${formattedDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          setRecordData(data.data[0]);
        } else {
          setRecordData(null);
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
        setRecordData(null);
      });
  }, [selectedDate, symbol]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return { selectedDate, setSelectedDate, recordData };
};
