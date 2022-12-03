import { CircleWavyWarning, CloudSun } from 'phosphor-react';
import { useData } from '~/contexts/DataContext';
import { BannerContainer } from './styles';

export const Banner = () => {
   const { error, locale } = useData();

   return (
      <BannerContainer>
         <p>Clima e Previsão do Tempo</p>
         <span>
            {!error && locale ? (
               <>
                  <CloudSun size={24} />
                  <p>{locale}</p>
               </>
            ) : (
               <>
                  <CircleWavyWarning size={26} color='#FFE269' />
                  <p>Busque uma cidade</p>
               </>
            )}
         </span>
      </BannerContainer>
   );
};
