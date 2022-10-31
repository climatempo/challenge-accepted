import { act, renderHook, waitFor } from "@testing-library/react";
import useUserConfig from ".";

describe("useUserConfig", () => {
  describe("handleDropdown", () => {
    it("sets isDropdownOpen", () => {
      const setRainUnit = jest.fn();
      const setTempUnit = jest.fn();

      const {
        result: {
          current: { handleDropdown, isDropdownOpen },
        },
      } = renderHook(() => useUserConfig(setTempUnit, setRainUnit));

      act(() => {
        handleDropdown();
      });

      waitFor(() => {
        expect(isDropdownOpen).toBe(true);
      });
    });
  });

  describe("handleTempUnit", () => {
    it("calls setTempUnit", () => {
      const setRainUnit = jest.fn();
      const setTempUnit = jest.fn();

      const {
        result: {
          current: { handleTempUnit },
        },
      } = renderHook(() => useUserConfig(setTempUnit, setRainUnit));

      act(() => {
        handleTempUnit(1);
      });

      waitFor(() => {
        expect(setTempUnit).toHaveBeenCalledWith(1);
      });
    });
  });

  describe("handleRainUnit", () => {
    it("calls setRainUnit", () => {
      const setRainUnit = jest.fn();
      const setTempUnit = jest.fn();

      const {
        result: {
          current: { handleRainUnit },
        },
      } = renderHook(() => useUserConfig(setTempUnit, setTempUnit));

      act(() => {
        handleRainUnit(1);
      });

      waitFor(() => {
        expect(setRainUnit).toHaveBeenCalledWith(1);
      });
    });
  });
});
