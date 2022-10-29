import { fireEvent, render } from "@testing-library/react";
import SearchBar from ".";
import { Props } from "./types";

describe("SearchBar", () => {
  it("renders correctly", () => {
    const { container } = render(
      <SearchBar {...{} as Props}  />
    )

    const button = container.querySelector("button");
    const image = container.querySelector("img");
    const input = container.querySelector("input");

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  describe("when the input is focused", () => {
    it("calls the onFocus function", () => {
      const props = {
        onSubmit: jest.fn(),
        onFocus: jest.fn(),
        onBlur: jest.fn(),
        isFocused: false,
      };

      const { container } = render(
        <SearchBar {...props}  />
      )

      const input = container.querySelector("input");

      fireEvent.focus(input as Element);

      expect(props.onFocus).toHaveBeenCalled();
    });
  });

  describe("when form is submitted", () => {
    it("calls the onSubmit function", () => {
      const props = {
        onSubmit: jest.fn(),
        onFocus: jest.fn(),
        onBlur: jest.fn(),
        isFocused: false,
      };

      const { container } = render(
        <SearchBar {...props}  />
      )

      const form = container.querySelector("form");

      fireEvent.submit(form as Element);

      expect(props.onSubmit).toHaveBeenCalled();
    });
  });
});
