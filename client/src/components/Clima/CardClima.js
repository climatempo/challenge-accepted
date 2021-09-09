import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import moment from 'moment'

import {
  Card,
  Grid, Image, Statistic, Form, Radio,
} from 'semantic-ui-react'

const CardClima = (props) => {
  const [locale] =  useState(props.city)
  const [typeWeather, setTypeWeather] = useState(props.typeWeather)
  const [typeRain, setTypeRain] = useState(props.typeRain)

  return(
    <div style={{paddingLeft: '10px'}}>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Form>
              <Form.Group inline>
                <label>Temperatura (º {typeWeather})</label>
                <Form.Field>
                  <Radio
                    label='ºC'
                    name='graus'
                    checked={typeWeather === 'C'}
                    value={typeWeather}
                    onChange={() => setTypeWeather('C')}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='ºF'
                    name='graus'
                    checked={typeWeather === 'F'}
                    value={typeWeather}
                    onChange={() => setTypeWeather('F')}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Form>
              <Form.Group inline>
                <label>Medida ({typeRain})</label>
                <Form.Field >
                  <Radio
                    label='mm'
                    name='rain'
                    checked={typeRain === 'mm'}
                    value={typeRain}
                    onChange={() => setTypeRain('mm')}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='inch'
                    name='rain'
                    checked={typeRain === 'inch'}
                    value={typeRain}
                    onChange={() => setTypeRain('inch')}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br/>
      Previsão para {locale.locale.name} - {locale.locale.state}
      <br/>
        {(locale.weather).map((weather, keyWeather) => {
          return (
            <Card key={keyWeather} fluid>
              <Card.Content>
                <Card.Header>{moment(weather.date).format('DD/MM/YYYY')}</Card.Header>
                <Card.Meta>
                  {weather.text}
                </Card.Meta>
              </Card.Content>
              <Card fluid>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} style={{fontSize: '10px'}}>
                      <Statistic.Group horizontal size='tiny'>
                        <Grid>
                          <Grid.Column width={8}>
                            <Image src={require('./../../images/icons/upload.png')}
                              className='iconsBorder'
                            />
                          </Grid.Column>
                          <Grid.Column width={8} className='labelBorder'>
                            <Statistic color='blue'>
                              <Statistic.Value>{typeWeather == "C" ? weather.temperature.max : ((weather.temperature.max * 1.8) + 32).toFixed(2)}</Statistic.Value>
                              <Statistic.Label style={{color: '#2185d0'}}>{typeWeather == "C" ? 'ºC' : 'ºF'}</Statistic.Label>
                            </Statistic>
                          </Grid.Column>
                        </Grid>
                        <Grid>
                          <Grid.Column width={8}>
                            <Image src={require('./../../images/icons/raindrop-close-up.png')}
                              className='iconsBorder'
                            />
                          </Grid.Column>
                          <Grid.Column width={8} className='labelBorder'>
                            <Statistic>
                              <Statistic.Value>{typeRain == 'mm' ? weather.rain.precipitation : (weather.rain.precipitation/25.4).toFixed(3)}</Statistic.Value>
                              <Statistic.Label>{typeRain == 'mm' ? 'mm' : 'inch'}</Statistic.Label>
                            </Statistic>
                          </Grid.Column>
                        </Grid>
                        <Statistic>
                        </Statistic>
                      </Statistic.Group>
                    </Grid.Column>
                    <Grid.Column width={8} style={{fontSize: '10px'}}>
                      <Statistic.Group horizontal size='tiny'>
                        <Grid>
                          <Grid.Column width={8}>
                            <Image src={require('./../../images/icons/download.png')}
                              className='iconsBorder'
                            />
                          </Grid.Column>
                          <Grid.Column width={8} className='labelBorder'>
                            <Statistic color='red'>
                              <Statistic.Value>{typeWeather == "C" ? weather.temperature.min : ((weather.temperature.min * 1.8) + 32).toFixed(2)}</Statistic.Value>
                              <Statistic.Label style={{color: '#db2828'}}>{typeWeather == "C" ? 'ºC' : 'ºF'}</Statistic.Label>
                            </Statistic>
                          </Grid.Column>
                        </Grid>
                        <Grid>
                          <Grid.Column width={8}>
                            <Image src={require('./../../images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png')}
                              className='iconsBorder'
                            />
                          </Grid.Column>
                          <Grid.Column width={8} className='labelBorder'>
                            <Statistic>
                              <Statistic.Value>{weather.rain.probability}</Statistic.Value>
                              <Statistic.Label>%</Statistic.Label>
                            </Statistic>
                          </Grid.Column>
                        </Grid>
                        <Statistic>
                        </Statistic>
                      </Statistic.Group>
                    </Grid.Column>
                    </Grid>
                </Card.Content>
              </Card>
            </Card>
          )
        })}
      </div>
  )
}
export default withRouter(CardClima)