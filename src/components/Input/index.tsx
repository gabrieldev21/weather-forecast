import * as S from "./styled";
import { WrapperProps } from "./types";

export const Input = ({
  placeholder,
  name,
  flex,
  value,
  onChange,
}: WrapperProps) => {
  return (
    <S.WrapperForm flex={flex} onSubmit={(evt) => evt.preventDefault()}>
      <S.Input
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </S.WrapperForm>
  );
};
