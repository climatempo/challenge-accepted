import React from "react";
import Cards from "../Cards";
import { ContentWrapper, ResponseDisplay } from "./style";

const Content = () => (
  <ContentWrapper>
    <ResponseDisplay>Vazio</ResponseDisplay>
    <Cards />
  </ContentWrapper>
);

export default Content;
