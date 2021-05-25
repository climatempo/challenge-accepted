import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Home({dados}) {

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [resultados, setResultados] = useState([]);
  const [weather, setWeather] = useState([]);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results, 'string', 'results')
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result, 'result')
  }

  const handleOnSelect = (item) => {
    setNewRepo(item);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  useEffect(() => {
    }, [newRepo.name]);

  async function handleAddRepository(e){
    e.preventDefault();
    
    // if (!newRepo) {
    //   setInputError('Digite o nome da Cidade');
    //   return;
    // }

    await axios.get(`http://localhost:3333/clima/weather/findall?locale=${newRepo.name}`)
            .then(response => setResultados(response.data));
    
    // setWeather(resultados.map(item => item.weather));

    // console.log(weather, 'weather handle')

  }

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleAddRepository}>
        <div style={{ width: 900 }}>
          <ReactSearchAutocomplete
              styles="width:100%"
              items={dados}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
            />
        </div>
        <button type="submit" className={styles.pesquisar}><img src="/icons/search.png" /></button>
      </form>
      {inputError && <span className={styles.span}>{inputError}</span>}
      
      {console.log(resultados.map(item => item.weather.map(we => new Date(we.date).toLocaleDateString())))}
      

      <h2 className={styles.title}>
        Previsão para {resultados.map(item => item.locale.name.toString())} - SP
      </h2>

      <ul>
        {resultados.map(item => item.weather.map(we => (
          <div className={styles.card} key={we.date} >
            <div className={styles.cardRowOne}>
              <p><strong>{new Date(we.date).toLocaleDateString()}</strong></p>
              <p>{we.text}</p>
            </div>
            <div className={styles.cardRowTwo}>
              <div className={styles.cardColumnOne}>
                <div className={styles.cardColumnOneRowOne}>
                  <img src="/icons/upload.png" />
                  <span className={styles.grau}>{we.temperature.max}°C</span>
                </div>
                <div className={styles.cardColumnOneRowTwo}>
                  <img src="/icons/raindrop-close-up.png" />
                  <span className={styles.milimetros}>{we.rain.precipitation}mm</span>
                </div>
              </div>
              <div className={styles.cardColumnTwo}>
                <div className={styles.cardColumnTwoRowOne}>
                  <img src="/icons/download.png" />
                  <span className={styles.grau}>{we.temperature.min}°C</span>
                </div>
                <div className={styles.cardColumnTwoRowTwo}>
                  <img src="/icons/protection.png" />
                  <span className={styles.grau}>{we.rain.probability}%</span>
                </div>
              </div>
            </div>
          </div>


        )))}
      </ul>

     </div>
   )
 }

Home.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3333/clima/locales/findall/');

  return { dados: response.data }
}

export default Home;
