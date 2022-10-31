import { renderHook, waitFor } from "@testing-library/react";
import useWeatherCardData from ".";
import { RainUnit, TempUnit } from "../../types/config";

describe("useWeatherCardData", () => {
  it("returns the correct data", () => {
    const data = {
      date: "2021-01-01",
      text: "text",
      temperature: { min: 10, max: 20 },
      rain: { probability: 80, precipitation: 20 },
    };
    const rainUnit = RainUnit.Mm;
    const tempUnit = TempUnit.Celsius;

    const {
      result: { current },
    } = renderHook(() => useWeatherCardData(data, rainUnit, tempUnit));

    waitFor(() => {
      expect(current).toEqual({
        date: "01/01/2021",
        text: "text",
        temperature: { min: "10 °C", max: "20 °C" },
        rain: { probability: "80%", precipitation: "20 mm" },
      });
    });
  });
});
