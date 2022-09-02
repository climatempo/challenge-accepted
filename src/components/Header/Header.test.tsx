import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header render elements", () => {
    it("Shoud render logo", () => {
        const { getByAltText } = render(<Header />);

        expect(getByAltText("Climatempo logo")).toBeTruthy();
    });
});