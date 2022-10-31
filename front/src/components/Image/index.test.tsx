import { render } from "@testing-library/react";
import Image from ".";

describe('Image', () => {
  it('renders correctly', () => {
    const { container } = render(<Image src="test" alt="test" />);

    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', 'test');
    expect(container.querySelector('img')).toHaveAttribute('alt', 'test');
  });
})
