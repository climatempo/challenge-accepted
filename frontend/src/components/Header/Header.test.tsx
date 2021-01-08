import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders the alt image text", () => {
  render(<Header />);
  const headerImage = screen.getByAltText("Clima Tempo Logo");
  expect(headerImage).toBeInTheDocument();
});
