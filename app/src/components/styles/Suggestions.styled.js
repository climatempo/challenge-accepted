import styled from "styled-components";

export const StyledSuggestions = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  left: 0;
  top: 38px;
  z-index: 10;
  overflow: hidden;
  border-bottom-left-radius: 9px !important;
  border-bottom-right-radius: 9px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

  & > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.light};
  }

  & > ul > li {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    border-top: 1px solid ${({ theme }) => theme.colors.dark};
    padding: 1rem;

    :first-child {
      border-top: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0.85rem 1rem;
    }
  }
`;
