import { useContext, useState } from 'react';

import SearchBarImg from '../images/icons/search.png';
import useGenericState from '../hooks/useGenericState';
import context from '../Context/context';
import { getWeatherByLocale } from '../api/getWeathers';

export default function SearchBar() {
  const [willSearch, setWillSearch] = useState('C');

  const { setActualCity, setWeathers, token, setHasSearch } =
    useContext(context);

  const INITIAL_STATE = {
    searchBarInput: '',
  };

  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);

  const onSubmit = async (e) => {
    e.preventDefault();

    const weatherByLocale = await getWeatherByLocale(
      genericState.searchBarInput,
      token
    );

    if (
      weatherByLocale.message?.includes(':(') ||
      genericState.searchBarInput.replace(/\s/g, '') === ''
    ) {
      setWeathers(404);
      setWillSearch(false);
      setActualCity('');
      setHasSearch(false)
      return;
    }

    setWeathers(weatherByLocale.weather);
    setActualCity(
      `${weatherByLocale.locale.name} - ${weatherByLocale.locale.state}`
    );

    // allows the rendering of weathers from the searched city
    setHasSearch(true);

    // return to the search icon
    setWillSearch(false);

    // clean the input
    setGenericState({ target: { name: 'searchBarInput', value: '' } });
  };

  return (
    <div className="flex justify-end text-sm h-1/2 w-1/2">
      {willSearch ? (
        <form className="w-2/3" onSubmit={onSubmit}>
          <input
            className="w-full text-center p-2 rounded-md"
            value={genericState.searchBarInput}
            name={'searchBarInput'}
            onChange={setGenericState}
            type="text"
            placeholder="Press enter to search :)"
          />
        </form>
      ) : (
        <button
          onClick={() => setWillSearch(true)}
          className="self-end mr-1.5 m-auto"
        >
          <img src={SearchBarImg} alt="searh bar" width={25} />
        </button>
      )}
    </div>
  );
}
