import axios from 'axios';
import {
   createContext,
   ReactNode,
   useCallback,
   useContext,
   useEffect,
   useState,
} from 'react';
import { LOCAL_URL } from '~/constants/urls';

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
            .get(`${LOCAL_URL}/weather`, { params: { city } })
            .then((res) => res.data)
            .catch((error) => console.log(error));

         if (!response) {
            setError(true);
            setSearch(undefined);
            return;
         }

         setWeather(response.weather);
      },
      [search]
   );

   useEffect(() => {
      search && getWeatherByCity(search.city);
   }, [search]);

   const getSearchedLocale = useCallback(
      async (search: string) => {
         const response = await axios
            .get(`${LOCAL_URL}/locale`, { params: { search } })
            .then((res) => res.data)
            .catch((error) => console.log(error));

         if (!response) {
            setError(true);
            setSearch(undefined);
            return;
         }

         const cityName = `${response.name}, ${response.state}`;

         setLocale(cityName);
      },
      [search]
   );

   useEffect(() => {
      search && getSearchedLocale(search.city);
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
