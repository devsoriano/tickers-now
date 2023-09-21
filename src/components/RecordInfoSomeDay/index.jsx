/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecordInfo } from "../../hooks/useRecordInfo";
import { formatDate } from "../../utils/utils";
import "./styles.scss";

export const RecordInfoSomeDay = ({ symbol }) => {
  const { selectedDate, setSelectedDate, recordData } = useRecordInfo(symbol);

  return (
    <div className="container-record">
      <h3>Record</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      {recordData ? (
        <div className="record-info">
          <h3>Date selected record: {formatDate(recordData.date)}</h3>
          <div className="card-detail">
            <div className="card-item">
              <div className="label">Open Price:</div>
              <div className="value">{recordData.openPrice}</div>
            </div>
            <div className="card-item">
              <div className="label">Close Price:</div>
              <div className="value">{recordData.closePrice}</div>
            </div>
            <div className="card-item">
              <div className="label">High Price:</div>
              <div className="value">{recordData.highPrice}</div>
            </div>
            <div className="card-item">
              <div className="label">Low Price:</div>
              <div className="value">{recordData.lowPrice}</div>
            </div>
            <div className="card-item">
              <div className="label">Volume:</div>
              <div className="value">{recordData.volume}</div>
            </div>
          </div>
        </div>
      ) : (
        <p>Without data, try with another date</p>
      )}
    </div>
  );
};
