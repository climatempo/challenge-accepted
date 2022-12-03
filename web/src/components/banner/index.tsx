import { CircleWavyWarning, CloudSun } from 'phosphor-react';
import { useData } from '~/contexts/DataContext';
import { BannerContainer } from './styles';

export const Banner = () => {
   const { locale } = useData();
   return (
      <BannerContainer>
         <p>Clima e Previsão do Tempo</p>
         <span>
            {locale ? (
               <>
                  <CloudSun size={24} />
                  <p>{locale}</p>
               </>
            ) : (
               <>
                  <CircleWavyWarning size={24} color='#FFE269' />
                  <p>Busque uma cidade</p>
               </>
            )}
         </span>
      </BannerContainer>
   );
};
