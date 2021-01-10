import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import { UL, P, Img, Div } from './styles';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';

import logo from '../../images/logo.png';


function Localidades() {
    const [weathers, setWeathers] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        api.get(`/weather/${text}`).then(response => {
            setWeathers(response.data);
            console.log(response.data);
        });
    }, [text]);

    return (
        <div>
        <Img src={logo} alt="ClimaTempo logo" />
        <Div>
        <SearchInput value={text} onChange={(search) => setText(search)} placeholder="Digite aqui" />
        </Div>
        <P>Previsão para {text}</P>
       {weathers.weather && (
            <UL>
            {weathers.weather.map((weather, index) => (
                    <li key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <Card.Title>{weather.date}</Card.Title>
                            <Card.Text>
                                {weather.text}
                            </Card.Text>
                            </Card.Body>
                            <Card.Body>
                            <Card.Title>Temperatura e Chuva</Card.Title>
                            <Card.Text>
                                Mínima: {weather.temperature.min}°C Máxima: {weather.temperature.max}°C
                                Precipitação e Probabilidade de chuva: {weather.rain.precipitation}mm | {weather.rain.probability}%
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </UL>
       )}
        </div>
    );
}

export default Localidades;