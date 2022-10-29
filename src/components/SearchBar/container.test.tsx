import { fireEvent, render } from "@testing-library/react";
import SearchBarContainer from "./container";

describe("SearchBarContainer", () => {
  describe("when the input is focused", () => {
    it("changes form style", () => {
      const { container } = render(<SearchBarContainer />);

      const form = container.querySelector("form");
      const input = container.querySelector("input");

      expect(form).toHaveStyleRule(
        "box-shadow",
        "0 0 3rem 0.1rem rgba(0,0,0,0.2)"
      );

      fireEvent.focus(input as Element);

      expect(form).toHaveStyleRule(
        "box-shadow",
        "0 0 3rem 0.1rem rgba(52,72,121,0.5)"
      );
    });

    it("changes icon style", () => {
      const { container } = render(<SearchBarContainer />);

      const image = container.querySelector("img");
      const input = container.querySelector("input");

      expect(image).toHaveStyleRule(
        "filter",
        "invert(77%) sepia(2%) saturate(252%) hue-rotate(188deg) brightness(98%) contrast(92%)"
      );

      fireEvent.focus(input as Element);

      expect(image).toHaveStyleRule(
        "filter",
        "invert(27%) sepia(9%) saturate(3432%) hue-rotate(185deg) brightness(94%) contrast(91%)"
      );
    });
  });
});
