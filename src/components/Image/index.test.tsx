import { render } from "@testing-library/react";
import Image from ".";

describe('Image', () => {
  it('renders correctly', () => {
    render(<Image src="test" alt="test" />);

    expect(document.querySelector('img')).toBeInTheDocument();
    expect(document.querySelector('img')).toHaveAttribute('src', 'test');
    expect(document.querySelector('img')).toHaveAttribute('alt', 'test');
  });
})
