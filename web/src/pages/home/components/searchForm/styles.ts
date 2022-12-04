import styled from 'styled-components';

export const SearchFormContainer = styled.form`
   width: 100%;

   margin: 2rem 1rem;

   padding: 0 0.5rem;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;

   input {
      width: 80%;
      padding: 1rem;

      background-color: ${({ theme }) => theme.colors['base-input']};

      color: ${({ theme }) => theme.colors['base-white']};

      border-radius: 5px;

      &::placeholder {
         color: ${({ theme }) => theme.colors['base-label']};
      }

      &::-webkit-calendar-picker-indicator {
         display: none !important;
      }
   }
`;

const BaseButton = styled.button`
   background-color: ${({ theme }) => theme.colors['base-button']};

   color: ${({ theme }) => theme.colors['base-white']};

   border-radius: 5px;
`;

export const SearchButton = styled(BaseButton)`
   display: flex;
   gap: 0.5rem;

   padding: 1rem;

   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
   }

   transition: background-color 0.2s;

   &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
   }
`;

export const ButtonMenuContainer = styled(BaseButton)`
   padding: 0.3rem 0;
`;
