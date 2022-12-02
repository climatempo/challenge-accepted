import styled from 'styled-components';

export const BannerContainer = styled.header`
   width: 100%;
   height: 5rem;

   background-color: ${({ theme }) => theme.colors['brand-blue-dark']};
   color: ${({ theme }) => theme.colors['base-white']};

   font-size: ${({ theme }) => theme.textSizes['text-m']};

   display: flex;
   align-items: center;
   justify-content: space-around;

   span {
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 0.5rem;
   }
`;
