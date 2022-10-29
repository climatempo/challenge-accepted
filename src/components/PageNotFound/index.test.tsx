import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from ".";

describe("PageNotFound", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );

    const title = container.querySelector("h1");
    const text = container.querySelector("span");
    const anchor = container.querySelector("a");

    expect(title).toHaveTextContent("404");
    expect(text).toHaveTextContent(
      "Ops! Parece que não tem nada sobre a previsão do tempo aqui."
    );
    expect(anchor).toHaveTextContent(
      "Clique aqui para ir para a página inicial."
    );
  });
});
