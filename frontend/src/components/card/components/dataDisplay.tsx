import { Flex, Text } from "@chakra-ui/react";
import { Icon, IconProps } from "../../Icon";

interface DataDisplayProps {
  iconProps: IconProps;
  label: string;
}

export const DataDisplay = ({ iconProps, label }: DataDisplayProps) => {
  return (
    <Flex align={"center"} gap={3} maxW={"6rem"} w="full">
      <Icon {...iconProps} />
      <Text>{label}</Text>
    </Flex>
  );
};
