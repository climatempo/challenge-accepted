import { MenuItemOption, MenuOptionGroup } from "@chakra-ui/react";

interface ConfigCardProps {
  title: string;
  unit: string[];
  value: string;
  setValue(value: string): void;
}

export const ConfigCard = ({
  title,
  unit,
  setValue,
  value,
}: ConfigCardProps) => {
  return (
    <MenuOptionGroup
      value={value}
      onChange={(value) => {
        setValue(value.toString());
      }}
      title={title}
      type="radio"
    >
      <MenuItemOption value={unit[0]}>{unit[0]}</MenuItemOption>
      <MenuItemOption value={unit[1]}>{unit[1]}</MenuItemOption>
    </MenuOptionGroup>
  );
};
