import fetchWeather from ".";
import fetchLocales from "../fetchLocales";

describe("fetchWeather", () => {
  it("calls setWeather", () => {
    const setWeather = jest.fn();
    fetchWeather(setWeather, "3477");
    expect(setWeather).toHaveBeenCalled();
  });
})
