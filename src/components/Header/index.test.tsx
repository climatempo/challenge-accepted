import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const docHeader = container.querySelector("[data-id='header']");

    expect(container.querySelector("img")).toBeInTheDocument();
    expect(docHeader).toHaveStyleRule("background", "#344879");
  });
});
