import { render } from "@testing-library/react";
import Header from ".";

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(document.querySelector('img')).toBeInTheDocument();
  });
})
