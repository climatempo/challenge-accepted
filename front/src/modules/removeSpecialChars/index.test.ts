import removeSpecialChars from ".";

describe("removeSpecialChars", () => {
  it("should remove special chars", () => {
    const stringToHandle = "Àáâãäåèéêëìíîïòóôõöùúûüçñ";
    const stringExpected = "aaaaaaeeeeiiiiooooouuuucn";

    const stringHandled = removeSpecialChars(stringToHandle);

    expect(stringHandled).toBe(stringExpected);
  });
});
