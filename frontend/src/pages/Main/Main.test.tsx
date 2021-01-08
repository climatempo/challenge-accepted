import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "pages/Main";

test("renders default text", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Pesquise a previsão das cidades/i);
  expect(linkElement).toBeInTheDocument();
});
