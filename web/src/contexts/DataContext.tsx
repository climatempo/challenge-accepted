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

   const getWeatherByCity = () => {
      const response = mockupData.filter(
         (data) => data.name.toLowerCase() === search?.city.toLowerCase()
      );

      console.log(response);

      if (response.length === 0) {
         setError(
            `OPS! Não conseguimos encontrar a previsão para essa cidade. 😩
                  Nossa equipe irá adiciona-lá em breve. 🥰`
         );
         return;
      }

      const cityName = `${response[0].name}, ${response[0].state}`;

      setLocale(cityName);
      setWeather(response[0].weather);
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
