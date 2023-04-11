import { Button, useColorMode } from "@chakra-ui/react";
import { Icon } from "../../../Icon";

export const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} variant={"link"} color={"whiteAlpha.700"}>
      <Icon name={colorMode === "light" ? "moon" : "sun"} />
    </Button>
  );
};
