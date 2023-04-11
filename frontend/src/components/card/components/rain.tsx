import { Flex } from "@chakra-ui/react";
import { useUserPreferences } from "../../../context/userPreferencesContext";
import { DataDisplay } from "./dataDisplay";

interface RainWrapperProps {
  precipitation: number;
  probability: number;
}

export const RainWrapper = ({
  precipitation,
  probability,
}: RainWrapperProps) => {
  const { chuva } = useUserPreferences();

  const rainPrecipitation = convertRain(precipitation, chuva);
  return (
    <Flex align={"center"} gap={4} justify={"space-between"}>
      <DataDisplay
        iconProps={{ name: "drop", color: "blue.400" }}
        label={rainPrecipitation + " " + chuva}
      />

      <DataDisplay
        iconProps={{ name: "rain", color: "gray.400" }}
        label={probability.toString() + "%"}
      />
    </Flex>
  );
};

function convertRain(precipitation: number, unit: "mm" | "inch") {
  if (unit === "inch") return Math.round((precipitation / 25.4) * 100) / 100;
  return Math.round(precipitation);
}
