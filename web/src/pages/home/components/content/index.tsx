import { useData } from '~/contexts/DataContext';
import { InfoCard } from '../infoCard';
import { SearchForm } from '../searchForm';
import {
   ButtonMenuContainer,
   CardsContainer,
   ContentContainer,
   TitleContainer,
} from './styles';
import { Menu } from '~/pages/home/components/searchForm/components/menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DotsThreeVertical } from 'phosphor-react';

export const Content = () => {
   const { error, locale, weather } = useData();

   return (
      <ContentContainer>
         <SearchForm />

         {/* TODO: IMPROVE & CLEAN THE LOGIC ABOVE */}
         {error ? (
            <span>
               OPS! Não conseguimos encontrar a previsão. 😩 <br /> Tente
               novamente com outra cidade!
            </span>
         ) : locale ? (
            <>
               <TitleContainer>
                  <h1>Previsão para: {locale}</h1>

                  <DropdownMenu.Root>
                     <DropdownMenu.Trigger asChild>
                        <ButtonMenuContainer aria-label='Abrir opções de visualização'>
                           <DotsThreeVertical size={32} weight='bold' />
                        </ButtonMenuContainer>
                     </DropdownMenu.Trigger>

                     <Menu />
                  </DropdownMenu.Root>
               </TitleContainer>

               <CardsContainer>
                  {weather?.map((data) => (
                     <InfoCard key={data.date} weather={data} />
                  ))}
               </CardsContainer>
            </>
         ) : (
            <h1>Pesquise uma cidade para obter a previsão.</h1>
         )}
      </ContentContainer>
   );
};
