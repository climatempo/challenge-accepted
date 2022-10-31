import fetchWeather from ".";

describe("fetchWeather", () => {
  it("calls setWeather", () => {
    const setWeather = jest.fn();
    fetchWeather(setWeather, "3477");
    expect(setWeather).toHaveBeenCalled();
  });
})
