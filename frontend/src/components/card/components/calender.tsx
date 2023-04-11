import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "../../Icon";

export const Calender = ({ date }: { date: number }) => {
  const textColor = useColorModeValue("white", "gray.700");
  const calenderColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Flex position={"relative"} align={"center"}>
      <Text
        position={"absolute"}
        color={textColor}
        fontWeight={"bold"}
        fontSize={"2xl"}
        lineHeight={1}
        w={"52px"}
        textAlign={"center"}
        mt={"20px"}
      >
        {date}
      </Text>
      <Icon name="calender" fontSize={"6xl"} color={calenderColor} />
    </Flex>
  );
};
