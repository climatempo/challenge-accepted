import { Flex } from "@chakra-ui/react";
import { useUserPreferences } from "../../../context/userPreferencesContext";
import { DataDisplay } from "./dataDisplay";

interface TemperatureWrapperProps {
  min: number;
  max: number;
}

export const TemperatureWrapper = ({ min, max }: TemperatureWrapperProps) => {
  const { temperatura } = useUserPreferences();

  const minTemperature = convertTemperature(min, temperatura);
  const maxTemperature = convertTemperature(max, temperatura);

  return (
    <Flex align={"center"} gap={4} justify={"space-between"}>
      <DataDisplay
        iconProps={{ name: "arrow_down", color: "blue.400" }}
        label={minTemperature + " " + temperatura}
      />
      <DataDisplay
        iconProps={{ name: "arrow_up", color: "red.400" }}
        label={maxTemperature + " " + temperatura}
      />
    </Flex>
  );
};

function convertTemperature(temperature: number, unit: "°C" | "°F") {
  if (unit === "°F") return Math.round((temperature * 9) / 5 + 32);
  return Math.round(temperature);
}
