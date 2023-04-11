import { Flex, Heading, Image } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex w={"full"} h={"full"} alignItems={"center"} flexDir={"column"}>
      <Image src="/loading.gif" />
      <Heading>Carregando...</Heading>
    </Flex>
  );
};
