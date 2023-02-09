import { ChangeEvent, HTMLProps } from "react";

export interface WrapperProps extends HTMLProps<HTMLInputElement> {
  flex?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}
