import styled from 'styled-components';

export const BannerContainer = styled.div`
   width: 100%;
   height: 5rem;

   background-color: ${({ theme }) => theme.colors['brand-blue-dark']};
   color: ${({ theme }) => theme.colors['base-white']};

   display: flex;
   align-items: center;
   justify-content: space-around;

   span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
   }
`;
