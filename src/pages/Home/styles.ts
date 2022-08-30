import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F1F1F1;
`;

export const Body = styled.div`
    margin: 50px auto;
    width: 90%;
    max-width: 1170px;
`;

export const Title = styled.h1`
    color: #333;
    font-weight: 500;

    @media (max-width: 500px) {
        font-size: 22px;
        margin-top: 85px;
    }
`;