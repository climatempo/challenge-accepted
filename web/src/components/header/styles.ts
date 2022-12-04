import styled from 'styled-components';

export const HeaderContainer = styled.header`
   width: 100%;
   height: 5rem;

   background-color: ${({ theme }) => theme.colors['brand-blue-light']};

   display: flex;
   align-items: center;
   justify-content: center;

   img {
      width: 8rem;
      height: fit-content;
   }
`;
