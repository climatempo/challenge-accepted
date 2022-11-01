import fetchLocales from ".";

describe("fetchLocales", () => {
  it("calls setLocales correctly", () => {
    const setLocales = jest.fn();
    fetchLocales(setLocales, "sa");
    expect(setLocales).toHaveBeenCalledWith([
      {
        id: 3735,
        name: "Osasco",
        state: "SP",
        latitude: -23.532,
        longitude: -46.792,
      },
      {
        id: 3477,
        name: "São Paulo",
        state: "SP",
        latitude: -23.548,
        longitude: -46.636,
      },
    ]);
  });
});
