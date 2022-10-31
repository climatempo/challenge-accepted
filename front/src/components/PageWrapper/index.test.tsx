import { render } from "@testing-library/react";
import PageWrapper from ".";

describe("PageWrapper", () => {
  it("should render correctly", () => {
    const { container } = render(<PageWrapper>test</PageWrapper>);

    const div = container.querySelector("div");

    expect(div).toBeInTheDocument();
    expect(div).toHaveTextContent("test");
    expect(div).toHaveStyleRule("height", "100%");
  });
});
