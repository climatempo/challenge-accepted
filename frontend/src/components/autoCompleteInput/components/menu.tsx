import {
  Flex,
  List,
  ListItem,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Locale } from "../../../services/models/locale";
import { Icon } from "../../Icon";

interface AutocompleteMenuProps {
  items: Locale[];
  getMenuProps: any;
  getItemProps: any;
  isOpen: boolean;
  highlightedIndex: number;
}

export const AutocompleteMenu = ({
  getMenuProps,
  getItemProps,
  highlightedIndex,
  isOpen,
  items,
}: AutocompleteMenuProps) => {
  const hoverColor = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <VStack
      {...getMenuProps()}
      alignItems="stretch"
      borderRadius="md"
      boxShadow="sm"
      mt={2}
      p={2}
      position="absolute"
      spacing={1}
      zIndex="10"
    >
      <List>
        {isOpen &&
          items
            ?.map((item, index) => (
              <ListItem
                {...getItemProps({ item, index })}
                bg={highlightedIndex === index ? hoverColor : undefined}
                borderRadius="md"
                cursor="pointer"
                key={`${item.id}${index}`}
                px={4}
                py={2}
              >
                <Flex gap={2} align={"center"}>
                  <Icon name="location" fontSize={"xl"} />
                  <Text>{item.name + " - " + item.state}</Text>
                </Flex>
              </ListItem>
            ))
            .slice(0, 5)}
      </List>
    </VStack>
  );
};
