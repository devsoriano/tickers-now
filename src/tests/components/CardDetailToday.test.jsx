import React from "react";
import { render, waitFor } from "@testing-library/react";
import { CardDetailToday } from "../../components/CardDetailToday";
import "@testing-library/jest-dom/jest-globals";

const mockDataToday = {
  openPrice: 100,
  closePrice: 110,
  highPrice: 120,
  lowPrice: 90,
  volume: 100000,
  date: "2023-09-20",
  acronym: "AAPL",
  country: "USA",
  name: "Apple Inc",
  symbol: "AAPL",
  nameExchange: "NASDAQ",
};

test("CardDetailToday displays the data correctly", async () => {
  const { getByText } = render(<CardDetailToday dataToday={mockDataToday} />);

  await waitFor(() => {
    expect(getByText("Acronym:")).toBeInTheDocument();
    expect(getByText("Country:")).toBeInTheDocument();
    expect(getByText("Name:")).toBeInTheDocument();
    expect(getByText("Symbol:")).toBeInTheDocument();
    expect(getByText("Name Exchange:")).toBeInTheDocument();

    expect(getByText("Acronym:").nextSibling.textContent).toBe(
      mockDataToday.acronym
    );
    expect(getByText("Country:").nextSibling.textContent).toBe(
      mockDataToday.country
    );
    expect(getByText("Name:").nextSibling.textContent).toBe(mockDataToday.name);
    expect(getByText("Symbol:").nextSibling.textContent).toBe(
      mockDataToday.symbol
    );
    expect(getByText("Name Exchange:").nextSibling.textContent).toBe(
      mockDataToday.nameExchange
    );

    expect(getByText("Open Price:").nextSibling.textContent).toBe(
      mockDataToday.openPrice.toString()
    );
    expect(getByText("Close Price:").nextSibling.textContent).toBe(
      mockDataToday.closePrice.toString()
    );
    expect(getByText("High Price:").nextSibling.textContent).toBe(
      mockDataToday.highPrice.toString()
    );
    expect(getByText("Low Price:").nextSibling.textContent).toBe(
      mockDataToday.lowPrice.toString()
    );
    expect(getByText("Volume:").nextSibling.textContent).toBe(
      mockDataToday.volume.toString()
    );
    expect(getByText("Date:").nextSibling.textContent).toBe(mockDataToday.date);
  });
});
