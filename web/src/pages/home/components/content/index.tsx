import { InfoCard } from '../infoCard';
import { InputForm } from '../inputForm';
import { ContentContainer } from './styles';

export const Content = () => {
   return (
      <ContentContainer>
         <InputForm />

         <h1>Previsão para: Osasco, SP</h1>

         <InfoCard />
      </ContentContainer>
   );
};
