import { ArrowDown, ArrowUp, Drop } from 'phosphor-react';
import { IconContainer, InfoCardContainer, Tags, WeatherInfos } from './styles';

export const InfoCard = () => {
   return (
      <InfoCardContainer>
         <h2>01 de Janeiro de 2023</h2>

         <h3>
            Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva
            a qualquer hora.
         </h3>

         <WeatherInfos>
            <div>
               <Tags tagColor='red'>Temperatura</Tags>

               <span>
                  <IconContainer>
                     <ArrowDown color='#0380CC' />
                     17º
                  </IconContainer>
                  <IconContainer>
                     <ArrowUp color='#E2251A' />
                     20º
                  </IconContainer>
               </span>
            </div>

            <div>
               <Tags tagColor='gray'>Chuva</Tags>

               <span>
                  <IconContainer>
                     <Drop color='#0380CC' weight='fill' />
                     25mm - 67%
                  </IconContainer>
               </span>
            </div>
         </WeatherInfos>
      </InfoCardContainer>
   );
};
