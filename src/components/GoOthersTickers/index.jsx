import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TickerViewContext } from "../../context";
import "./styles.scss";

export const GoOthersTickers = () => {
  const context = useContext(TickerViewContext);
  const { data } = context;
  const navigate = useNavigate();

  const navigateToDetail = (item) =>
    navigate(`/detail/${item.symbol}`, { state: { item } });

  return (
    <div className="principal-others">
      <h3>Check another ticker</h3>
      <div className="data-others">
        {data.map((item, index) => (
          <button
            key={index}
            className="data-item"
            onClick={() => navigateToDetail(item)}
          >
            {item.symbol}
          </button>
        ))}
      </div>
    </div>
  );
};
