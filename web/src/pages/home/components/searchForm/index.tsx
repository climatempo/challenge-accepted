import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { useData } from '~/contexts/DataContext';
import { SearchFormContainer } from './styles';

const searchFormValidationSchema = zod.object({
   city: zod.string().min(1, 'Informe o nome da cidade'),
});

type SearchFormData = zod.infer<typeof searchFormValidationSchema>;

export const SearchForm = () => {
   const { searchCity } = useData();

   const searchForm = useForm<SearchFormData>({
      resolver: zodResolver(searchFormValidationSchema),
      defaultValues: {
         city: '',
      },
   });

   const { handleSubmit, watch, reset, register } = searchForm;

   const handleSearchCity = (data: SearchFormData) => {
      searchCity(data);

      reset();
   };

   const city = watch('city');
   const isSubmitDisabled = !city;

   return (
      <SearchFormContainer onSubmit={handleSubmit(handleSearchCity)}>
         <label htmlFor='search' hidden>
            Busque por uma cidade
         </label>

         <input
            id='search'
            type='text'
            placeholder='Busque por uma cidade'
            {...register('city')}
         />

         <button aria-label='Buscar' disabled={isSubmitDisabled}>
            <MagnifyingGlass />
            Buscar
         </button>
      </SearchFormContainer>
   );
};
