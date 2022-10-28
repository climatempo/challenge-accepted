import { fireEvent, render } from "@testing-library/react";
import UserConfig from ".";

describe("UserConfig", () => {
  it("renders correctly", () => {
    const { container } = render(<UserConfig />);

    const cogWheelButton = container.querySelector(
      '[data-id="cogwheel-button"]'
    );

    expect(cogWheelButton).toBeInTheDocument();
  });

  it("opens dropdown when cogwheel button is clicked", () => {
    const { container } = render(<UserConfig />);

    const cogWheelButton = container.querySelector(
      '[data-id="cogwheel-button"]'
    );

    fireEvent.click(cogWheelButton as Element);

    const dropdown = container.querySelector('[data-id="cogwheel-dropdown"]');

    expect(dropdown).toBeInTheDocument();
  });
});
