import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

export default function Header({ city, setHasSearch, setActualCity, setWeathers }) {
  const defaultMessage = 'Clima e Previsão do Tempo';
  return (
    <>
      {/* logo */}
      <header className="h-32 flex flex-col justify-center items-center bg-primary-blue">
        <img
          className="transition-all hover:opacity-80"
          src="https://imgur.com/8jlWHWD.png"
          alt="climatempo logo"
          width={230}
          onClick={() => {
            setHasSearch(false)
            setActualCity('')
            setWeathers([])
          }}
        />
      </header>
      <div className="bg-secondary-blue h-16 flex items-center justify-center">
        <p className="justify-center text-center flex items-center text-white opacity-90 h-full w-1/3 leading-3 transition-all hover:opacity-75">
          {city || defaultMessage}
        </p>
        <SearchBar />
      </div>
    </>
  );
}

Header.defaultProps = {
  city: '',
};

Header.propTypes = {
  city: PropTypes.string,
};
