import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Calender } from "./components/calender";
import { CardLabel } from "./components/cardLabel";
import { RainWrapper } from "./components/rain";
import { TemperatureWrapper } from "./components/temperature";

interface CardProps {
  date: Date;
  max: number;
  min: number;
  precipitation: number;
  probability: number;
  text: string;
}

export const Card = ({
  date,
  max,
  min,
  precipitation,
  probability,
  text,
}: CardProps) => {
  const bgColor = useColorModeValue("white", "whiteAlpha.50");

  return (
    <Flex
      bg={bgColor}
      w={"full"}
      boxShadow={"base"}
      rounded={"md"}
      overflow={"hidden"}
      justify={"space-between"}
      flexDir={"column"}
    >
      <Flex flexDir={"column"} p={4}>
        <Flex gap={2}>
          <Heading fontSize={"xl"} fontWeight={"semibold"}>
            {Intl.DateTimeFormat("pt-br", {
              weekday: "long",
            }).format(date)}
          </Heading>

          <Heading fontSize={"xl"} fontWeight={"semibold"}>
            {Intl.DateTimeFormat("pt-br", {
              dateStyle: "short",
            }).format(date.setUTCHours(4))}
          </Heading>
        </Flex>

        <Text lineHeight={1.5}>{text}</Text>
      </Flex>

      <Flex bg="blackAlpha.100" p={4} align={"center"}>
        <Calender date={date.getDate()} />

        <Flex flexDir={"column"} gap={2} w={"full"}>
          <CardLabel label="TEMPERATURA" color="red.400" />
          <CardLabel label="CHUVA" color="gray.400" />
        </Flex>

        <Flex flexDir={"column"} gap={2} w={"full"}>
          <TemperatureWrapper max={max} min={min} />
          <RainWrapper
            precipitation={precipitation}
            probability={probability}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
