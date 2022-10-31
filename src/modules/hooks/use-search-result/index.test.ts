import useSearchResult from ".";
import { Locale } from "../../types/data";

describe("useSearchResult", () => {
  it("returns the searchValue and results", () => {
    const searchParams = new URLSearchParams("query=abc");
    const locales = [
      {
        name: "ABC",
        state: "SP",
      },
      {
        name: "DEF",
        state: "SP",
      },
    ] as unknown as Locale[];

    const { searchValue, results } = useSearchResult(searchParams, locales);

    expect(searchValue).toBe("abc");
    expect(results).toEqual([
      {
        name: "ABC",
        state: "SP",
      },
      {
        name: "DEF",
        state: "SP",
      },
    ]);
  });
});
