import UserConfig from ".";
import useUserConfig from "../../modules/hooks/use-user-config";

function UserConfigContainer() {
  const {
    tempUnit,
    rainUnit,
    isDropdownOpen,
    handleDropdown,
    handleTempUnit,
    handleRainUnit,
  } = useUserConfig();

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
