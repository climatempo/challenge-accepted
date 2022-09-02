import { render } from "@testing-library/react";
import { Home } from ".";

describe("Home render elements", () => {
    it("Should render search input", () => {
        const { getByPlaceholderText } = render(<Home />);

        expect(getByPlaceholderText("Busque por uma cidade...")).toBeTruthy();
    });

    it("Should render search logo", () => {
        const { getByAltText } = render(<Home />);

        expect(getByAltText("Search icon")).toBeTruthy();
    });
});