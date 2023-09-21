import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TickerViewContext } from "../../context";
import "./styles.scss";

export const DataList = () => {
  const context = useContext(TickerViewContext);
  const { data } = context;
  const navigate = useNavigate();

  const navigateToDetail = (item) =>
    navigate(`/detail/${item.symbol}`, { state: { item } });

  return (
    <div className="data-list">
      {data.map((item, index) => (
        <div key={index} className="data-item">
          <div className="data-item-info">Name: {item.name}</div>
          <div className="data-item-info">Symbol: {item.symbol}</div>
          <div className="data-item-info">Acronym: {item.acronym}</div>
          <div className="data-item-info">Country: {item.country}</div>
          <div className="data-item-info">Close Price: {item.closePrice}</div>
          <button
            className="data-item-info detail-button"
            onClick={() => navigateToDetail(item)}
          >
            Detail
          </button>
        </div>
      ))}
    </div>
  );
};
