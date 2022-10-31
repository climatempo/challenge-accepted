import UserConfig from ".";
import { useConfigContext } from "../../modules/contexts/config";
import useUserConfig from "../../modules/hooks/use-user-config";

function UserConfigContainer() {
  const { tempUnit, rainUnit, setTempUnit, setRainUnit } = useConfigContext();

  const { isDropdownOpen, handleDropdown, handleTempUnit, handleRainUnit } =
    useUserConfig(setTempUnit, setRainUnit);

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
