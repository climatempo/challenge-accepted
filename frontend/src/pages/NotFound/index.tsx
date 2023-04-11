import { Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Flex flexDir={"column"} align={"center"} gap={4}>
        <Image src="/404.gif" />
        <Heading textAlign={"center"}>Pagina nao encontrada</Heading>
        <Button
          onClick={() => navigate("/")}
          variant={"ghost"}
          colorScheme="gray"
        >
          Voltar
        </Button>
      </Flex>
    </Container>
  );
};
