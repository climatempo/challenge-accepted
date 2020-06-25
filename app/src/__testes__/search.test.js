import React from "react";
import { render } from "@testing-library/react";

import Search from "../components/Search";

// jest.mock("@unform/core", () => {
//   return {
//     useSelectCity() {
//       return {
//         citySelect: "",
//         setCitySelect: jest.fn(),
//       };
//     },
//   };
// });

describe("Teste da busca por cidades", () => {
  it("Quando selecionado uma cidade da lista o dado deve ser enviado ao endpoint", async () => {
    const { getAllByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText("Busque uma cidade...")).toBeTruthy();
  });
});

// const fieldNode = await waitForElement(() => getByTestId("form-field"));
// console.log(fieldNode);

// const newText = "Osasco"
// fireEvent.onSelect(
//     fieldNode,
//     { target: {value}})
