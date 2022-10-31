import { fireEvent, render } from "@testing-library/react";
import UserConfig from ".";
import { Props } from "./types";

describe("UserConfig", () => {
  it("renders correctly", () => {
    const { container } = render(<UserConfig {...{} as Props} />);

    const cogWheelButton = container.querySelector(
      '[data-id="cogwheel-button"]'
    );

    expect(cogWheelButton).toBeInTheDocument();
  });
});
