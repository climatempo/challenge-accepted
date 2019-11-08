import React from 'react';

import { 
    Container,
    Row,
    Icon,
    Text
} from './styles';

import { Images } from '../../../assets';

export default function Data({ weather }) {
  return (
    <Container /* Vertical*/>
        <Row marginBottom /** Horizontal */>
            <Row /** Horizontal */>
                <Icon src={Images.icons.upload}/>
                <Text color={'#0000FF'}>{`${weather.temperature.max}ºC`}</Text>
            </Row>
            <Row /** Horizontal */>
                <Icon src={Images.icons.download}/>
                <Text color={'#FF0000'}>{`${weather.temperature.min}ºC`}</Text>
            </Row>
        </Row>
        <Row /** Horizontal */>
            <Row /** Horizontal */>
                <Icon src={Images.icons.drop}/>
                <Text>{`${weather.rain.precipitation}mm`}</Text>
            </Row>
            <Row /** Horizontal */>
                <Icon src={Images.icons.umbrella}/>
                <Text>{`${weather.rain.probability}%`}</Text>
            </Row>
        </Row>
    </Container>
  );
}
