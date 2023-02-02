import * as S from "./styled";

export const Loader = () => {
  return (
    <S.Container>
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </S.Container>
  );
};
