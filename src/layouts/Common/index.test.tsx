import { render } from "@testing-library/react";
import CommonLayout from ".";

describe("CommonLayout", () => {
  it("renders correctly", () => {
    render(<CommonLayout>test</CommonLayout>);

    expect(document.querySelector("img")).toBeInTheDocument();
    expect(document.querySelector("div")).toBeInTheDocument();
    expect(document.querySelector("div")).toHaveTextContent("test");
  });
});
