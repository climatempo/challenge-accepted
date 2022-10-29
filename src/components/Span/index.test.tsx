import { render } from "@testing-library/react";
import Span from ".";

describe("Span", () => {
  it("renders correctly", () => {
    render(<Span>test</Span>);

    expect(document.querySelector("span")).toBeInTheDocument();
    expect(document.querySelector("span")).toHaveTextContent("test");
  });
});
