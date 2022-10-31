import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WeatherTitle from ".";

describe("WeatherTitle", () => {
  it("renders correctly", () => {
    const { container, getByText, getByAltText } = render(
      <BrowserRouter>
        <WeatherTitle locale="São Paulo - SP" />
      </BrowserRouter>
    );

    expect(container.querySelector("h1")).toBeInTheDocument();
    expect(getByText("Previsão para São Paulo - SP")).toBeInTheDocument();
    expect(getByAltText("Voltar")).toBeInTheDocument();
    expect(getByAltText("Início")).toBeInTheDocument();
  });
});
