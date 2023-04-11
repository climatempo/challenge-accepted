import { Button, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../components/Icon";
import { Card } from "../../components/card";
import { getForecast } from "../../services/providers/getForecast";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";

export function LocationInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <Loading />;

  const { data, isLoading, isError } = getForecast(id);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  console.log(data);

  return (
    <Container
      maxW={"70rem"}
      h={"full"}
      minH="90vh"
      display={"flex"}
      flexDir={"column"}
      gap={6}
      pt={16}
    >
      <Flex gap={4} align={"center"}>
        <Button
          variant={"ghost"}
          colorScheme="blue"
          onClick={() => navigate(-1)}
        >
          <Icon name="back" fontSize={"xl"} />
          voltar
        </Button>

        <Heading
          textAlign={"center"}
          fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          fontWeight={"medium"}
        >
          A previsão para {data?.locale.name} essa semana vai ser:
        </Heading>
      </Flex>

      <SimpleGrid mt={4} columns={{ base: 1, md: 2 }} spacing={4} w={"full"}>
        {data?.weather.map((item) => (
          <Card
            key={item.date.toString()}
            date={new Date(item.date)}
            max={item.temperature.max}
            min={item.temperature.min}
            precipitation={item.rain.precipitation}
            probability={item.rain.probability}
            text={item.text}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
