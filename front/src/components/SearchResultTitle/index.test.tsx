import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResultTitle from ".";

describe("SearchResultTitle", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SearchResultTitle searchValue="test" />
      </BrowserRouter>
    );

    expect(getByText("Você buscou por: test")).toBeInTheDocument();
  });
});
