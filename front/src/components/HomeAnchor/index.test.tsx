import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomeAnchor from ".";

describe("HomeAnchor", () => {
  it("renders correctly", () => {
    const { container, getByAltText } = render(
      <BrowserRouter>
        <HomeAnchor />
      </BrowserRouter>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
    expect(getByAltText("Início")).toBeInTheDocument();

  });
});
