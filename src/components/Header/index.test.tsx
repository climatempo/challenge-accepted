import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<Header />);

    const docHeader = container.querySelector("[data-id='header']");

    expect(container.querySelector("img")).toBeInTheDocument();
    expect(docHeader).toHaveStyleRule("background", "#344879");
  });
});
