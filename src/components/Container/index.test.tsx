import { render } from '@testing-library/react';
import Container from '.';

describe("Container", () => {
  it("renders correctly", () => {
    render(<Container>test</Container>);

    expect(document.querySelector("div")).toBeInTheDocument();
    expect(document.querySelector("div")).toHaveTextContent("test");
  });
});
