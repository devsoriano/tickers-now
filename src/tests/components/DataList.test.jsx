import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TickerViewContext } from "../../context";
import { DataList } from "../../components/DataList";
import "@testing-library/jest-dom/jest-globals";

const mockContextValue = {
  data: [
    {
      name: "Company A",
      symbol: "A",
      acronym: "ACM",
      country: "USA",
      closePrice: 100,
    },
  ],
};

test("renders DataList component with data", () => {
  const { getByText } = render(
    <MemoryRouter>
      <TickerViewContext.Provider value={mockContextValue}>
        <DataList />
      </TickerViewContext.Provider>
    </MemoryRouter>
  );

  expect(getByText("Name: Company A")).toBeInTheDocument();
  expect(getByText("Symbol: A")).toBeInTheDocument();
  expect(getByText("Acronym: ACM")).toBeInTheDocument();
  expect(getByText("Country: USA")).toBeInTheDocument();
  expect(getByText("Close Price: 100")).toBeInTheDocument();
});
