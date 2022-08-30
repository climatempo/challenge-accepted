import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background-color: #0080CD;

    @media (max-width: 500px) {
        height: 55px;
    }
`;

export const HeaderContent = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1170px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        justify-content: center;
    }
`;

export const Logo = styled.img`
    width: 120px;
`;

export const Search = styled.div`
    flex: .95;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #0267A3;
    border-radius: 5px;
    padding: 5px 20px;

    @media (max-width: 500px) {
        position: absolute;
        left: 0;
        top: 55px;
        width: 100%;
        height: 55px;
        background-color: #FFF;
        border-radius: 0px;
    }
`;

export const Input = styled.input`
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #FFF;

    ::placeholder {
        color: inherit;
        opacity: 50%;
        font-size: 15px;
        font-weight: 100;
    }

    @media (max-width: 500px) {
        color: #000;
    }
`;

export const SearchLogo = styled.img`
    height: 55%;
    filter: invert(100%);
    opacity: 50%;

    @media (max-width: 500px) {
        filter: none;
    }
`;