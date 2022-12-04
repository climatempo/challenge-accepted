import axios from 'axios';
import {
   createContext,
   ReactNode,
   useCallback,
   useContext,
   useEffect,
   useReducer,
   useState,
} from 'react';
import { converterReducer } from '~/reducers/reducer';

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
   error: boolean | undefined;

   locale: string | undefined;
   weather: Weather[] | undefined;
   searchCity: (data: SearchFormData) => void;

   degreeUnit: string;
   changeDegreeUnit: (degree: string) => void;

   precipitationUnit: string;
   changePrecipitationUnit: (unit: string) => void;
}

export const DataContext = createContext({} as DataContextType);

interface ContextProviderProps {
   children: ReactNode;
}

export const DataContextProvider = ({ children }: ContextProviderProps) => {
   const [error, setError] = useState(false);

   const [search, setSearch] = useState<SearchFormData>();
   const [weather, setWeather] = useState<Weather[] | undefined>();
   const [locale, setLocale] = useState<string | undefined>();

   const [degreeUnit, setDegreeUnit] = useState('celsius');
   const [precipitationUnit, setPrecipitationUnit] = useState('mm');

   const searchCity = (data: SearchFormData) => {
      setSearch(data);
      setError(false);
   };

   const getWeatherByCity = useCallback(
      async (city: string) => {
         const response = await axios
            .post('http://localhost:3000/locale', { city })
            .then((res) => res.data)
            .catch((error) => console.log(error));

         if (!response) {
            setError(true);
            setSearch(undefined);
            return;
         }

         const cityName = `${response.name}, ${response.state}`;

         setLocale(cityName);
         setWeather(response.weather);
      },
      [search]
   );

   useEffect(() => {
      search && getWeatherByCity(search.city);
   }, [search]);

   const changeDegreeUnit = (degree: string) => {
      setDegreeUnit(degree);
   };

   const changePrecipitationUnit = (unit: string) => {
      setPrecipitationUnit(unit);
   };

   return (
      <DataContext.Provider
         value={{
            error,
            locale,
            weather,
            searchCity,
            degreeUnit,
            changeDegreeUnit,
            precipitationUnit,
            changePrecipitationUnit,
         }}
      >
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);
