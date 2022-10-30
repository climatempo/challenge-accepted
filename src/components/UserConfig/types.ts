import { MouseEventHandler } from "react";
import { RainUnits, TempUnits } from "../../modules/types/config";

export interface Props {
  handleDropdown: MouseEventHandler<HTMLButtonElement>;
  handleTempUnit: (unit: TempUnits) => MouseEventHandler<HTMLButtonElement>;
  handleRainUnit: (unit: RainUnits) => MouseEventHandler<HTMLButtonElement>;
  tempUnit: TempUnits;
  rainUnit: RainUnits;
  isDropdownOpen: boolean;
}
