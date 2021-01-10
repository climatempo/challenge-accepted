import styled from 'styled-components';

export const UL = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1.5rem;
`;

export const P = styled.p`
    font-family: sans-serif;
    font-size: 20px;
    margin-left: 45px;
    margin-top: 20px;
`;

export const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 900px;
    height: 150px;
`;

export const Div = styled.div`
    margin-top: 60px;
    margin-left: 45px;
`;