import styled, { css } from 'styled-components';

import Autosuggest from 'react-autosuggest';

import { device } from '../../style'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
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