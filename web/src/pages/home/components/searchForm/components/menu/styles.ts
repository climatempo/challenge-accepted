import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Content = styled(DropdownMenu.Content)`
   width: 12rem;

   padding: 1rem;

   background-color: ${({ theme }) => theme.colors['base-white']};
   border-radius: 5px;

   box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
      0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const Label = styled(DropdownMenu.Label)`
   color: ${({ theme }) => theme.colors['base-title']};
   margin-bottom: 0.5rem;

   text-align: center;
`;

export const Item = styled(DropdownMenu.RadioItem)`
   display: grid;
   grid-template-columns: 1rem 1fr;

   align-items: center;

   gap: 0.5rem;

   padding: 0.5rem 0.2rem;
   border-radius: 5px;

   cursor: default;

   &[data-highlighted] {
      background-color: ${({ theme }) => theme.colors['brand-blue-light']};
      color: ${({ theme }) => theme.colors['base-white']};
   }

   p {
      grid-column: 2;
   }
`;

export const ItemIndicator = styled(DropdownMenu.ItemIndicator)`
   color: ${({ theme }) => theme.colors['base-selected']};

   display: flex;
   align-items: center;
`;

export const Separator = styled(DropdownMenu.Separator)`
   height: 1px;
   margin: 1rem 0;
   background-color: ${({ theme }) => theme.colors['base-span-gray']};
`;

export const Arrow = styled(DropdownMenu.Arrow)`
   fill: ${({ theme }) => theme.colors['base-white']};
`;
