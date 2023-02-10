import * as S from "./styled";
import { ButtonProps } from "./types";

export const Button = ({ title, ...props }: ButtonProps) => {
  return <S.Content {...props}>{title}</S.Content>;
};
