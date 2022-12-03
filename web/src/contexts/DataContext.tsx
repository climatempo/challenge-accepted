import axios from 'axios';
import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from 'react';
import { mockupData } from '~/mock/data';

interface SearchFormData {
   city: string;
}

export interface Weather {
   date: string;
   text: string;
   temperature: {
      min: number;
      max: number;
   };
   rain: {
      probability: number;
      precipitation: number;
   };
}

interface DataContextType {
   error: string | undefined;
   locale: string | undefined;
   weather: Weather[] | undefined;
   searchCity: (data: SearchFormData) => void;
}

export const DataContext = createContext({} as DataContextType);

interface ContextProviderProps {
   children: ReactNode;
}

export const DataContextProvider = ({ children }: ContextProviderProps) => {
   const [search, setSearch] = useState<SearchFormData>();
   const [weather, setWeather] = useState<Weather[] | undefined>([]);
   const [locale, setLocale] = useState<string | undefined>(undefined);
   const [error, setError] = useState('');

   const searchCity = (data: SearchFormData) => {
      setSearch(data);
   };

   const getWeatherByCity = async () => {
      const response = await axios
         .post('http://localhost:3000/locale', { city: search?.city })
         .then((res) => res.data);

      if (response.length === 0) {
         setError(
            `OPS! Não conseguimos encontrar a previsão para: ${search?.city}. 😩`
         );
         return;
      }

      const cityName = `${response.name}, ${response.state}`;

      setLocale(cityName);
      setWeather(response.weather);
   };

   useEffect(() => {
      search && getWeatherByCity();
   }, [search]);

   return (
      <DataContext.Provider value={{ error, locale, weather, searchCity }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);
