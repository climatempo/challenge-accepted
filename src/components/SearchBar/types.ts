import { FocusEventHandler, FormEventHandler } from "react";

export interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>,
  onFocus: FocusEventHandler<HTMLInputElement>,
  onBlur: FocusEventHandler<HTMLInputElement>,
  isFocused: boolean,
}

export interface StyledProps {
  isFocused: boolean,
}
