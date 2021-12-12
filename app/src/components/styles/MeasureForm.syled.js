import styled from "styled-components";

export const StyledMeasureForm = styled.div`
  .btn-config {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.4rem;
    cursor: pointer;
  }

  .btn-primary {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .btn-secondary {
    color: ${({ theme }) => theme.colors.dark};
    border-color: ${({ theme }) => theme.colors.dark};
  }
`;
