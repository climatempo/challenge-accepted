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
    localStorage.setItem("tempUnit", JSON.stringify(unit));
    setTempUnit(unit);
  };

  const handleRainUnit = (unit: RainUnit) => () => {
    localStorage.setItem("rainUnit", JSON.stringify(unit));
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
