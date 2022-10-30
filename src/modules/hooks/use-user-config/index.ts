import { useState } from "react";
import { RainUnits, TempUnits } from "../../types/config";

function useUserConfig() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tempUnit, setTempUnit] = useState<TempUnits>(TempUnits.celsius);
  const [rainUnit, setRainUnit] = useState<RainUnits>(RainUnits.mm);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTempUnit = (unit: TempUnits) => () => {
    setTempUnit(unit);
  };

  const handleRainUnit = (unit: RainUnits) => () => {
    setRainUnit(unit);
  };

  return {
    isDropdownOpen,
    handleDropdown,
    tempUnit,
    handleTempUnit,
    rainUnit,
    handleRainUnit,
  }
}

export default useUserConfig;
