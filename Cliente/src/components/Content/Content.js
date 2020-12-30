import React,{ useState, useEffect} from 'react'
import { Row, Container } from 'reactstrap'
import axios from 'axios'
import TimeCard from '../TimeCard/TimeCard'

export default function Content(props) {
  const [weather, setWeather] = useState([])
  const [idCity, setCity] = useState(props.city)

  useEffect(() => {
    async function fetchAPI() {
      try{
        let { data } = await axios.get(`http://localhost:5000/weathers/${idCity}/`)
        setWeather(data)
      }catch(error){
        alert("Ocorreu um erro ao buscar os dados da cidade.")
      }
    }
    fetchAPI()
  }, [idCity])

  return(
    weather === undefined || weather.length === 0 || weather[0].length === null ? 
    <Container fluid={true}>  
        <h2 className="text-center mt-3">BUSQUE PELA CIDADE DESEJADA.</h2>
    </Container>
    :
    <Container fluid={true}>  
      <h2 className="text-center mt-3">Previsão Para: {weather[0].locale.name}</h2>
      <Row className="justify-content-md-center">
      {
        weather[0].weather.map((value, index) => {
          return <TimeCard
            key={index}
            date={value.date}
            text={value.text}
            rainPrecipitation={value.rain.precipitation}
            rainProbability={value.rain.probability}
            temperaturaMin={value.temperature.min}
            temperaturaMax={value.temperature.max}
          />
        })
      }
      </Row>
    </Container>
  )
}