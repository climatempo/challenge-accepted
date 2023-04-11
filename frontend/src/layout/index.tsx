import { Box, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../components/header";

export function Layout({ children }: { children: React.ReactNode }) {
  const bgColor = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  return (
    <Box bg={bgColor} minH={"100vh"} h={"full"}>
      <Header />
      {children}
    </Box>
  );
}
