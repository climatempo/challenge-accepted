import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CommonLayout from ".";

describe("CommonLayout", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <CommonLayout>test</CommonLayout>
      </BrowserRouter>
    );

    expect(document.querySelector("img")).toBeInTheDocument();
    expect(document.querySelector("div")).toBeInTheDocument();
    expect(document.querySelector("div")).toHaveTextContent("test");
  });
});
