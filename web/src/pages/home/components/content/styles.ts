import styled from 'styled-components';

export const ContentContainer = styled.main`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;

   h1 {
      color: ${({ theme }) => theme.colors['base-title']};

      font-size: ${({ theme }) => theme.textSizes['title-l']};
   }
`;
