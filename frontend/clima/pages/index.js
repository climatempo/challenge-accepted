import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Home({dados}) {

  const [city, setCity] = useState('');
  const [inputError, setInputError] = useState('');
  const [resultados, setResultados] = useState([]);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isInch, setIsInch] = useState(false);

  const handleOnSearch = (string, results) => {
    console.log(string, results, 'string', 'results')
  }

  const handleOnHover = (result) => {
    console.log(result, 'result')
  }

  const handleOnSelect = (item) => {
    setCity(item);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  useEffect(() => {
    }, [city.name]);

  async function handleAddRepository(e){
    e.preventDefault();
    
    if (!city) {
      setInputError('Digite o nome da Cidade');
      return;
    }

    await axios.get(`http://localhost:3333/clima/weather/findall?locale=${city.name}`)
            .then(response => setResultados(response.data));
    
    setInputError('');
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
      
      {console.log(resultados, 'ghuighygyhgbyhvvgukvhvh')}
      {typeof resultados != "undefined" && resultados != null && resultados.length != null && resultados.length > 0
        ?      
        <div className={styles.topo}>
          <h2 className={styles.title}>
            Previsão para {resultados.map(item => item.locale.name.toString())} - SP
          </h2>
          {isInch === false
            ?
            <button className={styles.conversorF} onClick={() => {setIsInch(true)}}>
              Covert para "inch"
            </button>
            :
            <button className={styles.conversorC} onClick={() => {setIsInch(false)}}>
              Covert para "mm"
            </button>
          }
          {isFahrenheit === false
            ?
            <button className={styles.conversorF} onClick={() => {setIsFahrenheit(true)}}>
              Covert para ºF
            </button>
            :
            <button className={styles.conversorC} onClick={() => {setIsFahrenheit(false)}}>
              Covert para ºC
            </button>
          }
        </div>
        :
        <div className={styles.topo}>
          <span>Climatempo - Busque a previsão para sua cidade nos próximos dias.</span>
        </div>
      }


      

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
                  {isFahrenheit === false 
                    ? 
                      <span className={styles.grau}>
                        {we.temperature.max}°C
                      </span>
                    : 
                      <span className={styles.grau}>
                        {((we.temperature.max * 1.8) + 32).toFixed(0)}°F
                      </span>
                  }
                </div>
                <div className={styles.cardColumnOneRowTwo}>
                  <img src="/icons/raindrop-close-up.png" />
                  {isInch === false 
                    ? 
                      <span className={styles.milimetros}>
                        {we.rain.precipitation}mm
                      </span>
                    : 
                      <span className={styles.milimetros}>
                        {(we.rain.precipitation / 25.4).toFixed(2)}inch
                      </span>
                  }
                </div>
              </div>
              <div className={styles.cardColumnTwo}>
                <div className={styles.cardColumnTwoRowOne}>
                  <img src="/icons/download.png" />
                  {isFahrenheit === false 
                    ? 
                      <span className={styles.grau}>
                        {we.temperature.min}°C
                      </span>
                    : 
                      <span className={styles.grau}>
                        {((we.temperature.min * 1.8) + 32).toFixed(0)}°F
                      </span>
                  }
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
