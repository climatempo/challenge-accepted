import { render } from '@testing-library/react';
import Container from '.';

describe("Container", () => {
  it("renders correctly", () => {
    const { container } = render(<Container>test</Container>);

    expect(container.querySelector("div")).toBeInTheDocument();
    expect(container.querySelector("div")).toHaveTextContent("test");
    expect(container.querySelector("div")).toHaveStyleRule("padding", "0");
    expect(container.querySelector("div")).toHaveStyleRule("margin", "0");
    expect(container.querySelector("div")).toHaveStyleRule("box-sizing", "border-box");
  });
});
