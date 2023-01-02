import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: scroll;
  padding: 1rem;
  padding-bottom: 2rem;
  gap: 1rem;

  transition: 1s;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 65rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

export const Placeholder = styled.div`
  width: 20rem;
  height: 28rem;
  background-color: var(--gray-300);
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 350px;
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--gray-200) 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;
