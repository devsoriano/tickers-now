import React from "react";
import { render } from "@testing-library/react";
import { TickerViewContext } from "../../context";
import { Layout } from "../../components/Layout";
import "@testing-library/jest-dom/jest-globals";

test("renders the Layout component with loader", () => {
  const contextValue = {
    isLoading: true,
  };

  const { container, getByText } = render(
    <TickerViewContext.Provider value={contextValue}>
      <Layout>Content</Layout>
    </TickerViewContext.Provider>
  );

  const loader = container.querySelector(".loader");
  expect(loader).toBeInTheDocument();

  const headerText = getByText("Tickers now");
  expect(headerText).toBeInTheDocument();
});

test("renders the Layout component without loader", () => {
  const contextValue = {
    isLoading: false,
  };

  const { container, getByText } = render(
    <TickerViewContext.Provider value={contextValue}>
      <Layout>Content</Layout>
    </TickerViewContext.Provider>
  );

  const loader = container.querySelector(".loader");
  expect(loader).toBeNull();

  const headerText = getByText("Tickers now");
  expect(headerText).toBeInTheDocument();
});
