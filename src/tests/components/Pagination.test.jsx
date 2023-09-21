import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TickerViewContext } from "../../context";
import { Pagination } from "../../components/Pagination";
import "@testing-library/jest-dom/jest-globals";

const mockContextValue = {
  currentPage: 2,
  setCurrentPage: jest.fn(),
  totalItems: 100,
  itemsPerPage: 10,
};

test("renders Pagination component with buttons", () => {
  const { getByText } = render(
    <TickerViewContext.Provider value={mockContextValue}>
      <Pagination />
    </TickerViewContext.Provider>
  );

  expect(getByText("Back")).toBeInTheDocument();
  expect(getByText("Next")).toBeInTheDocument();
});

test("calls setCurrentPage when Previous and Next buttons are clicked", () => {
  const { getByText } = render(
    <TickerViewContext.Provider value={mockContextValue}>
      <Pagination />
    </TickerViewContext.Provider>
  );

  fireEvent.click(getByText("Back"));

  expect(mockContextValue.setCurrentPage).toHaveBeenCalledWith(1);

  fireEvent.click(getByText("Next"));

  expect(mockContextValue.setCurrentPage).toHaveBeenCalledWith(3);
});
