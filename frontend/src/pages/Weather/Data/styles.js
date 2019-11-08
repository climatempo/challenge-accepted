import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ marginBottom }) => marginBottom ? 'margin-bottom: 10px;' : ''}
`

export const Icon = styled.img`
    width: 25px;
    object-fit: contain;
`

export const Text = styled.span`
    text-align: center;
    flex-grow: 1;
    font-size: 16pt;
    color: ${({ color }) => color || 'black'};
`