import styled from "styled-components";

import { WrapperProps } from "./types";

export const WrapperForm = styled.form<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex};
  min-width: 400px;
  width: 35%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 16px;
  padding-left: 24px;
  padding-right: 50px;
  background-color: ${(props) => props.theme["white"]};
  border-color: transparent;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  outline: none;
`;

export const ButtonSearch = styled.button.attrs({ type: "button" })`
  position: absolute;
  right: 0;
  top: 2px;
  width: 50px;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: 0px;
  box-shadow: none;

  * {
    opacity: 0.8;
  }

  &:hover * {
    opacity: 1;
  }
`;
