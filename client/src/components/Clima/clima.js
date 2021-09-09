import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import axios from '../../services/axios';
import CardClima from './CardClima'

import {
  Button,
  Dropdown,
  Form,
  Grid, Icon, Image, Input, Message, Radio, Search
} from 'semantic-ui-react'

const listCity = [
  { key : 1, title : 'São Paulo', text : 'São Paulo'},
  { key : 2, title : 'Osasco', text : 'Osasco'},
]

const Clima = () => {
  const [locales, setLocales] = useState([])
  const [typeWeather, setTypeWeather] = useState('C')
  const [typeRain, setTypeRain] = useState('mm')
  const [resultSearch, setResultSearch] = useState([])

  const searchLocale = (city) => {
    setLocales([])
    if (city.length > 2) {
      axios.get('/weather/' + city).then((resp) => {
        console.log(resp.data)
        if (resp.data !== null) setLocales(resp.data)
      })
    }
  }

  return(
    <div>
      <Grid
        columns={1}
        centered
      >
        <Grid.Row style={{background: '#344879'}}>
          <Grid.Column mobile={16} tablet={2} computer={2} style={{padding: '20px 0px'}}>
            <Image
              src={require('./../../images/logo-white.png')} style={{
                margin: '0px auto',
                width: '80%'
              }}
            />
          </Grid.Column>
          <Grid.Column mobile={14} tablet={4} computer={4} style={{padding: '10px 0px'}}>
            <Search
              className='inputSearch'
              fluid
              type='text'
              placeholder='Pesquisar Cidade'
              onSearchChange={(e, data) => {
                let city = listCity.filter((el, i) => {
                  const removerAcentos = (text) => {
                    text = text.toLowerCase();
                    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
                    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
                    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
                    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
                    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
                    text = text.replace(new RegExp('[Ç]','gi'), 'c');
                    return text;
                  }
                  return removerAcentos(el.title).indexOf(removerAcentos(e.target.value)) !== -1
                })
                setResultSearch(city)
              }}
              onResultSelect={(e, data) => searchLocale(data.result.title)}
              results={resultSearch}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        columns={1}
        centered
        >
        <Grid.Row>
          { locales.length == 0 && (
            <Grid.Column width={8}>
              <Message color='red'>
                Nenhum resultado foi localizado
              </Message>
            </Grid.Column>
            )}
          </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Grid.Row>
              <Grid.Column width={15}>
                { locales.length !== 0 && (
                  <CardClima
                    city={locales}
                    typeRain={typeRain}
                    typeWeather={typeWeather}
                  />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default withRouter(Clima);