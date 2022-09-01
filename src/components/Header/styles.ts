import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0080CD;

    @media (max-width: 500px) {
        height: 55px;
    }
`;

export const Logo = styled.img`
    width: 120px;
    height: 17px;
`;