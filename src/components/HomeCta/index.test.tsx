import { render } from "@testing-library/react";
import HomeCta from ".";

describe("HomeCta", () => {
  it("renders correctly", () => {
    const { container } = render(<HomeCta />);

    const image = container.querySelector("img");
    const title = container.querySelector("h1");

    expect(image).toHaveAttribute("alt", "Logo Climatempo");
    expect(image).toHaveAttribute("src", "/images/logo.png");
    expect(title).toHaveTextContent(
      "Pesquise um local e obtenha a previsão do tempo."
    );
  });
});
