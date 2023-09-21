import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { GoBack } from "../../components/GoBack";
import { useNavigate } from "react-router-dom";
import "@testing-library/jest-dom/jest-globals";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("GoBack Component", () => {
  it("should navigate to the home page when clicking the button", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByTestId } = render(<GoBack />);

    const goBackButton = getByTestId("goBack");

    fireEvent.click(goBackButton);

    expect(navigate).toHaveBeenCalledWith("/");
  });
});
