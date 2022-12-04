import { ArrowDown, ArrowUp, Drop } from 'phosphor-react';
import { useData, Weather } from '~/contexts/DataContext';
import {
   dateFormatter,
   fahrenheinFormatter,
   inchFormatter,
} from '~/utils/formatter';
import { IconContainer, InfoCardContainer, Tags, WeatherInfos } from './styles';

interface InfoCardProps {
   weather: Weather;
}

export const InfoCard = ({ weather }: InfoCardProps) => {
   const { date, text, rain, temperature } = weather;
   const { degreeUnit, precipitationUnit } = useData();

   const formattedDate = dateFormatter(date);

   const precipitation =
      precipitationUnit === 'mm'
         ? `${rain.precipitation} mm`
         : `${inchFormatter(rain.precipitation)} inches`;

   const minTemperature =
      degreeUnit === 'fahrenhein'
         ? fahrenheinFormatter(temperature.min)
         : temperature.min;

   const maxTemperature =
      degreeUnit === 'fahrenhein'
         ? fahrenheinFormatter(temperature.max)
         : temperature.max;

   return (
      <InfoCardContainer>
         <h2>{formattedDate}</h2>

         <p>{text}</p>

         <WeatherInfos>
            <div>
               <Tags tagColor='red'>TEMPERATURA</Tags>

               <span>
                  <IconContainer>
                     <ArrowDown color='#0380CC' weight='bold' />
                     {minTemperature}º
                  </IconContainer>
                  <IconContainer>
                     <ArrowUp color='#E2251A' />
                     {maxTemperature}º
                  </IconContainer>
               </span>
            </div>

            <div>
               <Tags tagColor='gray'>CHUVA</Tags>

               <span>
                  <IconContainer>
                     <Drop color='#0380CC' weight='fill' />
                     {precipitation} - {rain.probability}%
                  </IconContainer>
               </span>
            </div>
         </WeatherInfos>
      </InfoCardContainer>
   );
};
