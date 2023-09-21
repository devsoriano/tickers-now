import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { GoOthersTickers } from "../../components/GoOthersTickers";
import { useNavigate } from "react-router-dom";
import "@testing-library/jest-dom/jest-globals";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("GoOthersTickers Component", () => {
  it(" should render the ticker buttons and navigate on click.", () => {
    const mockData = [
      { symbol: "AAPL" },
      { symbol: "GOOGL" },
      { symbol: "MSFT" },
    ];

    const useContextMock = jest.fn(() => ({ data: mockData }));
    React.useContext = useContextMock;

    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText } = render(<GoOthersTickers />);

    expect(getByText("AAPL")).toBeInTheDocument();
    expect(getByText("GOOGL")).toBeInTheDocument();
    expect(getByText("MSFT")).toBeInTheDocument();

    fireEvent.click(getByText("AAPL"));

    expect(navigate).toHaveBeenCalledWith("/detail/AAPL", {
      state: { item: { symbol: "AAPL" } },
    });
  });
});
