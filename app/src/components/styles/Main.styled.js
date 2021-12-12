import styled from "styled-components";

export const StyledMain = styled.div`
  min-height: 100%;
  background: ${({ theme }) => theme.colors.light};

  &.bg-climatempo {
    background-image: url(/img/climatempo-bg.png);
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      background-image: url(/img/climatempo-bg-mob.png);
    }
  }
`;
