import { mockupData } from '~/mock/data';
import { InfoCard } from '../infoCard';
import { InputForm } from '../inputForm';
import { CardsContainer, ContentContainer } from './styles';

export const Content = () => {
   return (
      <ContentContainer>
         <InputForm />

         <h1>Previsão para: Osasco, SP</h1>

         <CardsContainer>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
         </CardsContainer>
      </ContentContainer>
   );
};
