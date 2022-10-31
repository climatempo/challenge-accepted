import { ReactNode } from "react";
import Header from "../../components/Header";
import Wrapper, { ChildrenWrapper } from "./styles";

interface Props {
  children: ReactNode;
}

function CommonLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}

export default CommonLayout;
