import { act, renderHook, waitFor } from "@testing-library/react";
import { ChangeEvent, FormEvent } from "react";
import useSearchBar from ".";

describe("UseSearchBar", () => {
  describe("handleSubmit", () => {
    it("calls event.preventDefault", () => {
      const {
        result: {
          current: { handleSubmit },
        },
      } = renderHook(() => useSearchBar());

      const event = {
        preventDefault: jest.fn(),
      } as unknown as FormEvent;

      handleSubmit(event);

      expect(event.preventDefault).toHaveBeenCalled();
    });

    it("calls navigate with the correct path", () => {
      const navigate = jest.fn();
      const {
        result: {
          current: { handleSubmit, handleChange },
        },
      } = renderHook(() => useSearchBar(navigate));

      const submitEvent = {
        target: {
          value: "test",
        },
        preventDefault: jest.fn(),
      } as unknown as FormEvent;

      const changeEvent = {
        target: {
          value: "test",
        },
      } as unknown as ChangeEvent<HTMLInputElement>;

      act(() => {
        handleChange(changeEvent);
        handleSubmit(submitEvent);
      });

      waitFor(() => {
        expect(navigate).toHaveBeenCalledWith("/search?query=test");
      });
    });
  });

  describe("handleChange", () => {
    it("sets searchValue", () => {
      const {
        result: {
          current: { handleChange, searchValue },
        },
      } = renderHook(() => useSearchBar());

      const event = {
        target: {
          value: "test",
        },
      } as ChangeEvent<HTMLInputElement>;

      act(() => {
        handleChange(event);
      });

      waitFor(() => {
        expect(searchValue).toBe("test");
      });
    });
  });

  describe("handleFocus", () => {
    it("sets isFocused", () => {
      const {
        result: {
          current: { handleFocus, isFocused },
        },
      } = renderHook(() => useSearchBar());

      act(() => {
        handleFocus();
      });

      waitFor(() => {
        expect(isFocused).toBe(true);
      });
    });
  });

  describe("handleBlur", () => {
    it("sets isFocused", () => {
      const {
        result: {
          current: { handleBlur, isFocused, displaySugestions },
        },
      } = renderHook(() => useSearchBar());

      act(() => {
        handleBlur();
      });

      waitFor(() => {
        expect(isFocused).toBe(false);
        expect(displaySugestions).toBe(false);
      });
    });
  });

  describe("handleRouterPush", () => {
    it("calls navigate", () => {
      const navigate = jest.fn();

      const {
        result: {
          current: { handleRouterPush },
        },
      } = renderHook(() => useSearchBar(navigate));

      act(() => {
        handleRouterPush(1)();
      });

      waitFor(() => {
        expect(navigate).toHaveBeenCalledWith("/weather/1");
      });
    });
  });
});
