import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RecordInfoSomeDay } from "../../components/RecordInfoSomeDay";
import "@testing-library/jest-dom/jest-globals";

jest.mock("../../hooks/useRecordInfo", () => ({
  useRecordInfo: (symbol) => ({
    selectedDate: new Date("2023-09-20"),
    setSelectedDate: jest.fn(),
    recordData: {
      date: "2023-09-20",
      openPrice: 100,
      closePrice: 110,
      highPrice: 120,
      lowPrice: 90,
      volume: 100000,
    },
  }),
}));

jest.mock("../../utils/utils", () => ({
  formatDate: (date) => date,
}));

test("Renders the RecordInfoSomeDay component correctly", () => {
  const { getByText, getByLabelText } = render(
    <RecordInfoSomeDay symbol="AAPL" />
  );

  expect(getByText("Record")).toBeInTheDocument();
  expect(getByText("Date selected record: 2023-09-20")).toBeInTheDocument();
  expect(getByText("Open Price:")).toBeInTheDocument();
  expect(getByText("Close Price:")).toBeInTheDocument();
  expect(getByText("High Price:")).toBeInTheDocument();
  expect(getByText("Low Price:")).toBeInTheDocument();
  expect(getByText("Volume:")).toBeInTheDocument();
});
