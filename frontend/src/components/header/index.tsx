import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ConfigMenu } from "./components/configMenu";
import { ModeButton } from "./components/modeButton";

export const Header = () => {
  const headerColor = useColorModeValue("blue.500", "blackAlpha.400");

  return (
    <Box bg={headerColor} px={4} shadow={"md"}>
      <Container maxW={"70rem"}>
        <Flex h={16} align={"center"} justify={"space-between"}>
          <Image src="/logo-white.png" h={"16px"} />
          <Stack direction={"row"} align={"center"}>
            <ModeButton />
            <ConfigMenu />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
