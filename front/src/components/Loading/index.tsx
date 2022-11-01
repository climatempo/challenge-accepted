import Wrapper, { Spinner } from "./styles";

function Loading() {
  return (
    <Wrapper data-id="loading-wrapper">
      <Spinner data-id="loading-spinner" />
    </Wrapper>
  );
}

export default Loading;
