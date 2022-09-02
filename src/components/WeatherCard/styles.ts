import styled from "styled-components";

export const Container = styled.div`
    max-width: 400px;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    padding: 15px;
`;

export const Date = styled.span`
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
`;

export const Resume = styled.span`
    font-size: 16px;
    min-height: 60px;
`;

export const Statistics = styled.div`
    display: grid;
    padding: 15px;
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
    gap: 25px;
    background-color: #E0E0E0;
`;

export const Min = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .3s;

    &:hover {
        filter: brightness(150%);
    }
`;

export const Max = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .3s;

    &:hover {
        filter: brightness(150%);
    }
`;

export const Probability = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
`;

export const Precipitation = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .3s;

    &:hover {
        filter: opacity(60%);
    }
`;

export const Icon = styled.img`
    height: 100%;
    margin-right: 20px;
`;

export const Text = styled.span(({ textColor }: { textColor: string }) => (`
    color: ${textColor};
    font-size: 25px;
    font-weight: 400;
`));