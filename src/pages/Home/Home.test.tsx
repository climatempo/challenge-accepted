import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("Search locale", () => {
    it("Should autocomplete locale search", async () => {
        const { getByPlaceholderText, findByText } = render(<Home />);

        const inputElement = getByPlaceholderText("Busque por uma cidade...");

        userEvent.type(inputElement, "sao");

        expect(await findByText("São Paulo")).toBeTruthy();
    });
});

describe("Search render elements", () => {
    it("Should render search response", async () => {
        const { getByPlaceholderText, getByText, findByText } = render(<Home />);

        const inputElement = getByPlaceholderText("Busque por uma cidade...");

        userEvent.type(inputElement, "osa");

        expect(await findByText("Osasco")).toBeTruthy();

        const searchElement = getByText("Osasco");

        userEvent.click(searchElement);

        expect(await findByText("Previsão para Osasco - SP")).toBeTruthy();
    });
});