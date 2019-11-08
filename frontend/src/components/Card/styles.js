import styled from 'styled-components';

export const Container = styled.div`
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 4px 4px 2px #bbb;
    margin: 20px 20px;
    border-radius: 10px 10px 10px 10px;

` 

export const Header = styled.div`
    background-color: white;
    border-radius: 10px 10px 0px 0px;
    padding: 20px;
    min-height: 75px;
`

export const Content = styled.div`
    align-self: stretch;
    background-color: #ececec;
    border-radius: 0px 0px 10px 10px;
    padding: 20px;
`

export const Title = styled.h4`
    margin: 0;
`

export const Subtitle = styled.h5`
    margin: 0;
    margin-top: 10px;
    font-weight: normal;
`
