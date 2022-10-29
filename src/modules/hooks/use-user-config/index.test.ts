import { act, renderHook, waitFor } from "@testing-library/react";
import useUserConfig from ".";

describe("useUserConfig", () => {
  describe("handleDropdown", () => {
    it("sets isDropdownOpen", () => {
      const {
        result: {
          current: { handleDropdown, isDropdownOpen },
        },
      } = renderHook(() => useUserConfig());

      act(() => {
        handleDropdown();
      });

      waitFor(() => {
        expect(isDropdownOpen).toBe(true);
      });
    });
  });

  describe("handleTempUnit", () => {
    it("sets tempUnit", () => {
      const {
        result: {
          current: { handleTempUnit, tempUnit },
        },
      } = renderHook(() => useUserConfig());

      expect(tempUnit).toBe(0);

      act(() => {
        handleTempUnit(1);
      });

      waitFor(() => {
        expect(tempUnit).toBe(1);
      });
    });
  });

  describe("handleRainUnit", () => {
    it("sets rainUnit", () => {
      const {
        result: {
          current: { handleRainUnit, rainUnit },
        },
      } = renderHook(() => useUserConfig());

      expect(rainUnit).toBe(0);

      act(() => {
        handleRainUnit(1);
      });

      waitFor(() => {
        expect(rainUnit).toBe(1);
      });
    });
  });
});
