import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";
import { Locale } from "../../modules/types/data";

export interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  handleRouterPush: (id: number) => () => void;
  value: string;
  isFocused: boolean;
  displaySugestions: boolean;
  sugestions: Locale[];
}

export interface InputProps {
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export interface StyledProps {
  isFocused: boolean;
}
