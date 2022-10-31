import convertRainValue from ".";
import { RainUnit } from "../types/config";

describe("convertRainValue", () => {
  describe("when rainUnit is mm", () => {
    it("converts rain value", () => {
      const callback = jest.fn();

      convertRainValue(20, RainUnit.Mm, callback);

      expect(callback).toHaveBeenCalledWith("20 mm");
    });
  });

  describe("when rainUnit is inches", () => {
    it("converts rain value", () => {
      const callback = jest.fn();

      convertRainValue(20, RainUnit.Inch, callback);

      expect(callback).toHaveBeenCalledWith("0.79 inch");
    });
  });
});
