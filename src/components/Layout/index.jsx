/* eslint-disable react/prop-types */
import { ImStatsDots } from "react-icons/im";
import { useContext } from "react";
import { TickerViewContext } from "../../context";
import "./styles.scss";
import { Loader } from "../Loader";

export const Layout = ({ children }) => {
  const context = useContext(TickerViewContext);
  const { isLoading } = context;

  return (
    <div>
      {isLoading && <Loader />}
      <header>
        Tickers now <ImStatsDots className="stats" size={36} />
      </header>
      {children}
    </div>
  );
};
