import { CloudSun, Sun } from 'phosphor-react';
import { BannerContainer } from './styles';

export const Banner = () => {
   return (
      <BannerContainer>
         <p>Clima e Previsão do Tempo</p>
         <span>
            <CloudSun size={24} />
            <p>Osasco, SP</p>
         </span>
      </BannerContainer>
   );
};
