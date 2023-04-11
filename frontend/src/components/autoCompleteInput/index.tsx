import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {
  UseComboboxState,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions,
  useCombobox,
} from "downshift";
import { FormEvent } from "react";
import { Locale } from "../../services/models/locale";
import { Icon } from "../Icon";
import { AutocompleteMenu } from "./components/menu";

interface AutocompleteInputProps {
  items: Locale[];
  handleChangeInput: (event: FormEvent<HTMLInputElement>) => void;
  handleSelectedItemChange: (changes: UseComboboxStateChange<string>) => void;
}

export const AutocompleteInput = ({
  items,
  handleChangeInput,
  handleSelectedItemChange,
}: AutocompleteInputProps) => {
  const handleKeyDown = (
    state: UseComboboxState<string>,
    actionAndChanges: UseComboboxStateChangeOptions<string>
  ) => {
    const { type, changes } = actionAndChanges;
    const inputKeyDownTypes = useCombobox.stateChangeTypes.InputKeyDownEnter;

    if (
      inputKeyDownTypes === type &&
      state.isOpen &&
      state.highlightedIndex === -1
    ) {
      return {
        ...changes,
        selectedItem: items[0],
      };
    }
    return changes;
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: items?.map((item) => item.name + " - " + item.state),
    onSelectedItemChange: handleSelectedItemChange,
    stateReducer: handleKeyDown as any,
  });

  return (
    <Box w={"full"}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon name="search" />
        </InputLeftElement>
        <Input
          {...getInputProps({
            onChange: handleChangeInput,
            placeholder: "Digite para pesquisar...",
          })}
        />
      </InputGroup>
      <AutocompleteMenu
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        items={items}
      />
    </Box>
  );
};
