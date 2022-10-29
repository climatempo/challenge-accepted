import { useState } from "react";
import UserConfig from ".";
import { RainUnits, TempUnits } from "./types";


function UserConfigContainer() {
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


  return (
    <UserConfig
      tempUnit={tempUnit}
      rainUnit={rainUnit}
      isDropdownOpen={isDropdownOpen}
      handleDropdown={handleDropdown}
      handleTempUnit={handleTempUnit}
      handleRainUnit={handleRainUnit}
    />
  );
}

export default UserConfigContainer;
