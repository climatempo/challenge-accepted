import { MouseEventHandler } from "react";

export enum TempUnits {
  celsius = 0,
  fahrenheit = 1,
}

export enum RainUnits {
  mm = 0,
  inch = 1,
}

export interface Props {
  handleDropdown: MouseEventHandler<HTMLButtonElement>;
  handleTempUnit: (unit: TempUnits) => MouseEventHandler<HTMLButtonElement>;
  handleRainUnit: (unit: RainUnits) => MouseEventHandler<HTMLButtonElement>;
  tempUnit: TempUnits;
  rainUnit: RainUnits;
  isDropdownOpen: boolean;
}
