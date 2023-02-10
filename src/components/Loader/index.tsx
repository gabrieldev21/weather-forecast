import * as S from "./styled";

export const Loader = () => {
  return (
    <S.Container data-testid="loader-container">
      <svg viewBox="0 0 50 50" data-testid="svg-loader">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </S.Container>
  );
};
