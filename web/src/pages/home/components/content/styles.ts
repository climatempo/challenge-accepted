import styled from 'styled-components';

export const ContentContainer = styled.main`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;

   padding: 0 2rem;

   color: ${({ theme }) => theme.colors['base-title']};

   > span {
      background-color: ${({ theme }) => theme.colors['base-error']};

      padding: 1rem;
      border-radius: 5px;

      text-align: center;
   }

   h1 {
      font-size: ${({ theme }) => theme.textSizes['title-l']};

      margin-bottom: 1rem;
   }
`;

export const CardsContainer = styled.div`
   margin: 1rem 0;
   display: grid;
   grid-template-columns: 1fr;
   gap: 1rem;

   @media screen and (min-width: 640px) and (max-width: 1007px) {
      // TABLET
      grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (min-width: 1008px) {
      // DESKTOP
      grid-template-columns: repeat(3, 1fr);
   }
`;
