import styled from 'styled-components';

export const InfoCardContainer = styled.article`
   width: 20rem;

   padding: 2rem;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   border-radius: 5px;

   background-color: ${({ theme }) => theme.colors['base-white']};

   h2 {
      font-size: ${({ theme }) => theme.textSizes['title-m']};
   }

   p {
      font-size: ${({ theme }) => theme.textSizes['text-l']};
   }
`;

export const WeatherInfos = styled.div`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   div {
      width: 100%;

      display: flex;
      justify-content: space-between;

      span {
         display: flex;
         gap: 0.5rem;
      }
   }
`;

const TAG_COLORS = {
   gray: 'base-span-gray',
   red: 'base-span-red',
} as const;

interface TagsProps {
   tagColor: keyof typeof TAG_COLORS;
}

export const Tags = styled.span<TagsProps>`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   font-size: ${({ theme }) => theme.textSizes['text-s']};

   &::before {
      content: '';
      width: 0.5rem;
      height: 1rem;
      border-radius: 9999px;
      background: ${({ theme, tagColor }) =>
         theme.colors[TAG_COLORS[tagColor]]};
   }
`;

export const IconContainer = styled.span`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   font-size: ${({ theme }) => theme.textSizes['text-l']};
`;
