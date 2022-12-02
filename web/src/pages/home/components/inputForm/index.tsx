import { MagnifyingGlass } from 'phosphor-react';
import { InputFormContainer } from './styles';

export const InputForm = () => {
   return (
      <InputFormContainer>
         <label htmlFor='search' hidden>
            Busque por uma cidade
         </label>

         <input id='search' type='text' placeholder='Busque por uma cidade' />

         <button aria-label='Buscar'>
            <MagnifyingGlass />
            Buscar
         </button>
      </InputFormContainer>
   );
};
