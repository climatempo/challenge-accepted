import { Dispatch, SetStateAction, useState } from "react";
import { RainUnit, TempUnit } from "../../types/config";

function useUserConfig(
  setTempUnit: Dispatch<SetStateAction<TempUnit>>,
  setRainUnit: Dispatch<SetStateAction<RainUnit>>
) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTempUnit = (unit: TempUnit) => () => {
    setTempUnit(unit);
  };

  const handleRainUnit = (unit: RainUnit) => () => {
    setRainUnit(unit);
  };

  return {
    isDropdownOpen,
    handleDropdown,
    handleTempUnit,
    handleRainUnit,
  };
}

export default useUserConfig;
