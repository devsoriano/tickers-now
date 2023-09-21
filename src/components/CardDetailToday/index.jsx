/* eslint-disable react/prop-types */
import "./styles.scss";

export const CardDetailToday = ({ dataToday }) => {
  const {
    openPrice,
    closePrice,
    highPrice,
    lowPrice,
    volume,
    date,
    acronym,
    country,
    name,
    symbol,
    nameExchange,
  } = dataToday;

  return (
    <>
      <div className="card-detail-today">
        <div className="card-item">
          <div className="label">Acronym:</div>
          <div className="value">{acronym}</div>
        </div>
        <div className="card-item">
          <div className="label">Country:</div>
          <div className="value">{country}</div>
        </div>
        <div className="card-item">
          <div className="label">Name:</div>
          <div className="value">{name}</div>
        </div>
        <div className="card-item">
          <div className="label">Symbol:</div>
          <div className="value">{symbol}</div>
        </div>
        <div className="card-item">
          <div className="label">Name Exchange:</div>
          <div className="value">{nameExchange}</div>
        </div>
      </div>
      <div className="card-detail-today">
        <div className="card-item">
          <div className="label">Open Price:</div>
          <div className="value">{openPrice}</div>
        </div>
        <div className="card-item">
          <div className="label">Close Price:</div>
          <div className="value">{closePrice}</div>
        </div>
        <div className="card-item">
          <div className="label">High Price:</div>
          <div className="value">{highPrice}</div>
        </div>
        <div className="card-item">
          <div className="label">Low Price:</div>
          <div className="value">{lowPrice}</div>
        </div>
        <div className="card-item">
          <div className="label">Volume:</div>
          <div className="value">{volume}</div>
        </div>
        <div className="card-item">
          <div className="label">Date:</div>
          <div className="value">{date}</div>
        </div>
      </div>
    </>
  );
};
