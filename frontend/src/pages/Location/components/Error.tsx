import { Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Flex
        w={"full"}
        h={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        gap={4}
      >
        <Image src="/error.gif" />
        <Heading
          mt={4}
          fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          textAlign={"center"}
        >
          Não conseguimos criar uma previsão para essa cidade no momento, por
          favor, tente novamente mais tarde!
        </Heading>

        <Button
          onClick={() => navigate("/")}
          variant={"ghost"}
          colorScheme="blue"
        >
          Voltar
        </Button>
      </Flex>
    </Container>
  );
};
