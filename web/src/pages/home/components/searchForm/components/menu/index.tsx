import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CircleWavyCheck } from 'phosphor-react';
import { useState } from 'react';
import { useData } from '~/contexts/DataContext';
import {
   Arrow,
   Content,
   Item,
   Label,
   Separator,
   ItemIndicator,
} from './styles';

export const Menu = () => {
   const {
      degreeUnit,
      changeDegreeUnit,
      precipitationUnit,
      changePrecipitationUnit,
   } = useData();

   return (
      <DropdownMenu.Portal>
         <Content sideOffset={5}>
            <Label>Temperatura</Label>
            <DropdownMenu.RadioGroup
               value={degreeUnit}
               onValueChange={changeDegreeUnit}
            >
               <Item value='celsius'>
                  <ItemIndicator>
                     <CircleWavyCheck />
                  </ItemIndicator>
                  <p>Celsius (ºC)</p>
               </Item>
               <Item value='fahrenheit'>
                  <ItemIndicator>
                     <CircleWavyCheck />
                  </ItemIndicator>
                  <p>Fahrenheit (ºF)</p>
               </Item>
            </DropdownMenu.RadioGroup>

            <Separator />

            <Label>Precipitação</Label>
            <DropdownMenu.RadioGroup
               value={precipitationUnit}
               onValueChange={changePrecipitationUnit}
            >
               <Item value='mm'>
                  <ItemIndicator>
                     <CircleWavyCheck />
                  </ItemIndicator>
                  <p>Milímetros (mm)</p>
               </Item>
               <Item value='inch'>
                  <ItemIndicator>
                     <CircleWavyCheck />
                  </ItemIndicator>
                  <p>Polegadas (inch)</p>
               </Item>
            </DropdownMenu.RadioGroup>

            <Arrow />
         </Content>
      </DropdownMenu.Portal>
   );
};
