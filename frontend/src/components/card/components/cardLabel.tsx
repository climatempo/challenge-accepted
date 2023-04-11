import { Flex, Text } from "@chakra-ui/react";

interface CardLabelProps {
  label: string;
  color: string;
}

export const CardLabel = ({ color, label }: CardLabelProps) => {
  return (
    <Flex gap={2} align={"center"}>
      <Flex w={"8px"} h={"20px"} rounded={"full"} bg={color} />
      <Text>{label}</Text>
    </Flex>
  );
};
