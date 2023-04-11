import { Container, Flex, Image } from "@chakra-ui/react";
import { UseComboboxStateChange } from "downshift";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutocompleteInput } from "../../components/autoCompleteInput";
import { useDebounce } from "../../hooks/useDebouce";
import { searchLocales } from "../../services/providers/searchLocales";

export function Home() {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);

  const navigate = useNavigate();

  const { data: locales } = searchLocales(debouncedQuery);

  const handleSelectedItemChange = ({
    selectedItem,
  }: UseComboboxStateChange<string>) => {
    if (!selectedItem) return;

    const selectedLocale = locales?.find(
      (item) => item.name + " - " + item.state === selectedItem
    );
    if (!selectedLocale) return;

    navigate(`/weather/${selectedLocale.id}`);
  };

  return (
    <Container
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW={"70rem"}
      minH={"90vh"}
      h="full"
    >
      <Flex gap={16} flexDir="column" align={"center"} justify={"center"}>
        <Image src="/logo.png" h="64px" />

        <AutocompleteInput
          items={locales || []}
          handleChangeInput={(event) => {
            setQuery(event.currentTarget.value);
          }}
          handleSelectedItemChange={handleSelectedItemChange}
        />
      </Flex>
    </Container>
  );
}
