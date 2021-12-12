import styled from "styled-components";

export const StyledSearchBox = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "100%"};

  & > div > input,
  & > div > input:focus {
    box-shadow: none;
    border: 0;
    color: ${({ theme, color }) => color || theme.colors.secondary};
    background-color: ${({ theme, bgColor }) =>
      bgColor || theme.colors.darkPrimary};
    font-size: 0.9rem;
    border-radius: 0.25rem !important;
    padding-right: 54px;
  }

  & > div > input::placeholder {
    color: ${({ theme, color }) => color || theme.colors.secondary};
    opacity: 0.5;
    font-size: 0.9rem;
  }
`;

export const Icon = styled.span`
  & > svg {
    color: ${({ theme, color }) => color || theme.colors.secondary};
    position: absolute;
    z-index: 10;
    opacity: 0.5;
    font-size: 0.9rem;
    right: ${({ right }) => right};
    top: ${({ top }) => top};
    transform: rotate(90deg);
  }
`;
