import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
} from "@chakra-ui/react";
import { useUserPreferences } from "../../../../context/userPreferencesContext";
import { Icon } from "../../../Icon";
import { ConfigCard } from "./components/configCard";

export const ConfigMenu = () => {
  const { chuva, setChuva, temperatura, setTemperatura } = useUserPreferences();

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icon name="config" />}
        variant={"link"}
        color={"whiteAlpha.700"}
      />
      <MenuList alignItems={"center"}>
        <ConfigCard
          title="Temperatura:"
          unit={["°C", "°F"]}
          value={temperatura}
          setValue={setTemperatura}
        />
        <MenuDivider />
        <ConfigCard
          title="Chuva:"
          unit={["mm", "inch"]}
          value={chuva}
          setValue={setChuva}
        />
      </MenuList>
    </Menu>
  );
};
