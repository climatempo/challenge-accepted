import { Header } from "../../components/Header";
import { WeatherCard } from "../../components/WeatherCard";
import { Body, Container, Title } from "./styles";

export const Home = () => {
    return (
        <Container>
            <Header />
            <Body>
                <Title>Previsão para Osasco - SP</Title>
                <WeatherCard />
            </Body>
        </Container>
    );
};