/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./styles.scss";
import { useStoryTicket } from "../../hooks/useHistoryTicket";

export const HistoryTicker = ({ symbol }) => {
  const {
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    metric,
    setMetric,
    tickerData,
  } = useStoryTicket(symbol);

  return (
    <div className="history-chart-container">
      <h3>History ticker</h3>
      <div className="date-picker-container">
        <DatePicker
          selected={dateFrom.toDate()}
          onChange={(date) => setDateFrom(moment(date))}
          className="react-datepicker"
        />
        <DatePicker
          selected={dateTo.toDate()}
          onChange={(date) => setDateTo(moment(date))}
          className="react-datepicker"
        />
      </div>
      <div className="metric-select-container">
        <label htmlFor="metricSelect">Select a metric: </label>
        <select
          id="metricSelect"
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
        >
          <option value="highPrice">High Price</option>
          <option value="lowPrice">Low Price</option>
          <option value="openPrice">Open Price</option>
          <option value="closePrice">Close Price</option>
          <option value="volume">Volume</option>
        </select>
      </div>
      <div className="chart-container">
        <LineChart
          width={800}
          height={400}
          data={tickerData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={metric}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};
