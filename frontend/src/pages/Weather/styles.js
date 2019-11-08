import styled, { css } from 'styled-components';

import Autosuggest from 'react-autosuggest';

import { Card } from '../../components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`;

export const Header = styled.div`
    height: 20px;
    display: flex;
    padding: 20px 0;
`

export const Logo = styled.img`
    object-fit: contain;
    width: 100%;
`

export const Search = styled(Autosuggest)`

`

export const Title = styled.h3`
    margin: 20px 0 0 0;
`

export const WeatherList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const WeatherCard = styled(Card)`
    
`;