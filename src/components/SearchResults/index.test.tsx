import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResults from ".";
import { Locale } from "../../modules/types/data";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SearchResults results={[]} />);

    expect(getByText("Aqui estão alguns resultados")).toBeInTheDocument();
  });

  it("renders correctly with results", () => {
    const results = [
      {
        id: 1,
        name: "São Paulo",
        state: "SP",
      },
      {
        id: 2,
        name: "Rio de Janeiro",
        state: "RJ",
      },
    ] as Locale[];

    const { getByText } = render(
      <BrowserRouter>
        <SearchResults results={results} />
      </BrowserRouter>
    );

    expect(getByText("Aqui estão alguns resultados")).toBeInTheDocument();
    expect(getByText("São Paulo - SP")).toBeInTheDocument();
    expect(getByText("Rio de Janeiro - RJ")).toBeInTheDocument();
  });
});
