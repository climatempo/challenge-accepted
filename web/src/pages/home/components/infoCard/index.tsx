import { ArrowDown, ArrowUp, Drop } from 'phosphor-react';
import { Weather } from '~/contexts/DataContext';
import { dateFormatter } from '~/utils/dateFormatter';
import { IconContainer, InfoCardContainer, Tags, WeatherInfos } from './styles';

interface InfoCardProps {
   weather: Weather;
}

export const InfoCard = ({ weather }: InfoCardProps) => {
   const { date, text, rain, temperature } = weather;

   const formattedDate = dateFormatter(date);

   return (
      <InfoCardContainer>
         <h2>{formattedDate}</h2>

         <h3>{text}</h3>

         <WeatherInfos>
            <div>
               <Tags tagColor='red'>TEMPERATURA</Tags>

               <span>
                  <IconContainer>
                     <ArrowDown color='#0380CC' />
                     {temperature.min}º
                  </IconContainer>
                  <IconContainer>
                     <ArrowUp color='#E2251A' />
                     {temperature.max}º
                  </IconContainer>
               </span>
            </div>

            <div>
               <Tags tagColor='gray'>CHUVA</Tags>

               <span>
                  <IconContainer>
                     <Drop color='#0380CC' weight='fill' />
                     {rain.precipitation}mm - {rain.probability}%
                  </IconContainer>
               </span>
            </div>
         </WeatherInfos>
      </InfoCardContainer>
   );
};
