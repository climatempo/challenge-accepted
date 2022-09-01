import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #F1F1F1;
`;

export const Body = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1170px;
`;

export const Title = styled.h1`
    color: #333;
    font-weight: 500;
    margin: 50px 0 15px 0;

    @media (max-width: 1064px) {
        text-align: center;
    }
    @media (max-width: 500px) {
        font-size: 25px;
    }
`;

export const Search = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    background-color: #FFF;
    padding: 5px 20px;
`;

export const Input = styled.input`
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #333;
    font-size: 18px;

    ::placeholder {
        color: inherit;
        opacity: 50%;
        font-size: 16px;
        font-weight: 100;
    }
`;

export const SearchLogo = styled.img`
    width: 16px;
    height: 16px;
    opacity: 25%;
`;

export const AutoCompleteArea = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1;
`;

export const AutocompleteElement = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #EEE;
    padding: 0 30px;
    transition: .3s;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
        transform: rotate(-45deg);
    }

    &:hover {
        background-color: #F9F9F9;
    }
`;

export const CardsArea = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
    padding-bottom: 80px;

    @media (max-width: 1064px) {
        justify-content: center;
        gap: 50px 100px;
    }
`;