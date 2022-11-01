import { renderHook, waitFor } from "@testing-library/react";
import useWeather from ".";
import { weathers } from "../../services/mock";

describe("useWeather", () => {
  it("returns weather data", () => {
    const { result } = renderHook(() => useWeather("3477"));

    waitFor(() => {
      expect(result.current.weather).toEqual({
        locale: "São Paulo - SP",
        weather: weathers[1],
      });
    });
  });
});
