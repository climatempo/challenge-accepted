import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background-color: #0080CD;
`;

export const HeaderContent = styled.div`
    margin: 0 auto;
    max-width: 1170px;
    height: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

export const SearchLogo = styled.img`
    height: 55%;
    filter: invert(100%);
    opacity: 50%;
`;