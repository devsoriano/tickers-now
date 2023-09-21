import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "../../components/Loader";
import "@testing-library/jest-dom/jest-globals";

test("renders the Loader component", () => {
  const { container } = render(<Loader />);

  const loaderOverlay = container.querySelector(".loader-overlay");
  const loaderElement = container.querySelector(".loader");

  expect(loaderOverlay).toBeInTheDocument();
  expect(loaderElement).toBeInTheDocument();
});
