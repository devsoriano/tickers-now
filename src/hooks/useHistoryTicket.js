import { useState, useEffect } from "react";
import moment from "moment";

export const useStoryTicket = (symbol) => {
  const thirtyDaysAgo = moment().subtract(30, "days");
  const today = moment();

  const [dateFrom, setDateFrom] = useState(thirtyDaysAgo);
  const [dateTo, setDateTo] = useState(today);
  const [tickerData, setTickerData] = useState([]);
  const [metric, setMetric] = useState("highPrice");

  useEffect(() => {
    const formattedDateFrom = dateFrom.format("YYYY-MM-DD");
    const formattedDateTo = dateTo.format("YYYY-MM-DD");
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/range/${symbol}/eod/date_from/${formattedDateFrom}/date_to/${formattedDateTo}?metric=${metric}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTickerData(data.data);
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, [dateFrom, dateTo, metric, symbol]);

  return {
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    metric,
    setMetric,
    tickerData,
  };
};
