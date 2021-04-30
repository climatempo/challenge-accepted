import Header from './components/Header';

import searchIcon from './assets/search.png';
import './styles/global.css';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <>
      <Header />
      <div className="containerInput">
        <div>
          <input placeholder="Digite uma localização" />
          <button type="button">
            <img src={searchIcon} alt="search icon" />
          </button>
        </div>
      </div>

      <main>
        <div>
          <span>Previsão para Osasco - SP</span>
        </div>
        <div>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </main>
    </>
  );
}

export default App;
