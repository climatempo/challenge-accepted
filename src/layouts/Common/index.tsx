import { ReactNode } from "react";
import Header from "../../components/Header";
import Wrapper from "./styles";

interface Props {
  children: ReactNode;
}

function CommonLayout({children}: Props) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default CommonLayout;
