import { FiSearch } from "react-icons/fi";

import * as S from "./styled";
import { WrapperProps } from "./types";

export const Input = ({ placeholder, name, flex }: WrapperProps) => {
  return (
    <S.WrapperForm flex={flex} onSubmit={(evt) => evt.preventDefault()}>
      <S.Input type="text" name={name} placeholder={placeholder} />
      <S.ButtonSearch>
        <FiSearch size={"20px"} />
      </S.ButtonSearch>
    </S.WrapperForm>
  );
};
