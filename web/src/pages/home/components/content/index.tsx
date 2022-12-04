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
            <span>
               OPS! Não conseguimos encontrar a previsão. 😩 <br /> Tente
               novamente com outra cidade!
            </span>
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
            <h1>Pesquise uma cidade para obter a previsão.</h1>
         )}
      </ContentContainer>
   );
};
