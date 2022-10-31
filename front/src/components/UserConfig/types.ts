import { MouseEventHandler } from "react";
import { RainUnit, TempUnit } from "../../modules/types/config";

export interface Props {
  handleDropdown: MouseEventHandler<HTMLButtonElement>;
  handleTempUnit: (unit: TempUnit) => MouseEventHandler<HTMLButtonElement>;
  handleRainUnit: (unit: RainUnit) => MouseEventHandler<HTMLButtonElement>;
  tempUnit: TempUnit;
  rainUnit: RainUnit;
  isDropdownOpen: boolean;
}
