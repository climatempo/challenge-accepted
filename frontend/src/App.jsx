import Header from './components/Header';

import searchIcon from './assets/search.png';
import './styles/global.css';

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
    </>
  );
}

export default App;
