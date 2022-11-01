import { render } from "@testing-library/react";
import WeatherCards from ".";
import { weathers } from "../../modules/services/mock";

describe("WeatherCards", () => {
  it("renders correctly", () => {
    const { container } = render(
      <WeatherCards
        weather={weathers[0]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
