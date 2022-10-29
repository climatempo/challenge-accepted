import { render } from "@testing-library/react";
import Button from ".";

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>test</Button>);

    expect(document.querySelector('button')).toBeInTheDocument();
    expect(document.querySelector('button')).toHaveTextContent('test');
  });
})
