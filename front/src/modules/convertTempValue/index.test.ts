import convertTempValue from ".";
import { TempUnit } from "../types/config";

describe("convertTempValue", () => {
  describe("when tempUnit is Celsius", () => {
    it("converts temp value", () => {
      const callback = jest.fn();

      convertTempValue({ min: "10", max: "20" }, TempUnit.Celsius, callback);

      expect(callback).toHaveBeenCalledWith({
        min: "10 °C",
        max: "20 °C",
      });
    });
  });

  describe("when tempUnit is Fahrenheit", () => {
    it("converts temp value", () => {
      const callback = jest.fn();

      convertTempValue({ min: "10", max: "20" }, TempUnit.Fahrenheit, callback);

      expect(callback).toHaveBeenCalledWith({
        min: "50 °F",
        max: "68 °F",
      });
    });
  });
});
