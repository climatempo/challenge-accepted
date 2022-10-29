import { fireEvent, render } from "@testing-library/react";
import UserConfigContainer from "./container";

describe("when the cogwheel button is clicked", () => {
  it("opens dropdown when cogwheel button is clicked", () => {
    const { container } = render(<UserConfigContainer />);

    const cogWheelButton = container.querySelector(
      '[data-id="cogwheel-button"]'
    );

    fireEvent.click(cogWheelButton as Element);

    const dropdown = container.querySelector('[data-id="cogwheel-dropdown"]');

    expect(dropdown).toBeInTheDocument();
  });
});
