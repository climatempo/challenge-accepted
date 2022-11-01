import { render } from "@testing-library/react";
import Loading from ".";

describe("Loading", () => {
  it("renders correctly", () => {
    const { container } = render(<Loading />);

    const wrapper = container.querySelector("[data-id='loading-wrapper']");
    const spinner = container.querySelector("[data-id='loading-spinner']");

    expect(wrapper).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
