import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";
import { Locale } from "../../modules/types/data";

export interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onFocus: FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  handleRouterPush: (id: number) => () => void;
  value: string;
  isFocused: boolean;
  displaySugestions: boolean;
  sugestions: Locale[];
}

export interface StyledProps {
  isFocused?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}
