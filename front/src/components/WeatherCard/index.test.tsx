import { render } from "@testing-library/react";
import WeatherCard from ".";

describe("WeatherCard", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <WeatherCard
        date="01/01/2001"
        text="text"
        temperature={{ max: 11, min: 5 }}
        rain={{ precipitation: 12, probability: "10" }}
      />
    );

    expect(getByText("01/01/2001")).toBeInTheDocument();
    expect(getByText("text")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("11")).toBeInTheDocument();
    expect(getByText("12")).toBeInTheDocument();
  });
});
