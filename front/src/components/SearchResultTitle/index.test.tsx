import { render } from "@testing-library/react";
import SearchResultTitle from ".";

describe("SearchResultTitle", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SearchResultTitle searchValue="test" />);

    expect(getByText("Você buscou por: test")).toBeInTheDocument();
  });
});
