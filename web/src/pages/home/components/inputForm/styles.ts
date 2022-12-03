import styled from 'styled-components';

export const InputFormContainer = styled.form`
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
   }

   button {
      display: flex;
      gap: 0.5rem;

      padding: 1rem;

      background-color: ${({ theme }) => theme.colors['base-button']};

      color: ${({ theme }) => theme.colors['base-white']};

      border-radius: 5px;

      transition: background-color 0.2s;

      &:hover {
         background-color: ${({ theme }) => theme.colors['base-hover']};
      }
   }
`;
