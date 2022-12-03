import { useData } from '~/contexts/DataContext';
import { InfoCard } from '../infoCard';
import { SearchForm } from '../searchForm';
import { CardsContainer, ContentContainer } from './styles';

export const Content = () => {
   const { error, locale, weather } = useData();

   return (
      <ContentContainer>
         <SearchForm />

         {error ? (
            <h1>{error}</h1>
         ) : locale ? (
            <>
               <h1>Previsão para: {locale}</h1>

               <CardsContainer>
                  {weather?.map((data) => (
                     <InfoCard key={data.date} weather={data} />
                  ))}
               </CardsContainer>
            </>
         ) : (
            <h1>Pesquise uma cidade para obter sua previsão</h1>
         )}
      </ContentContainer>
   );
};
