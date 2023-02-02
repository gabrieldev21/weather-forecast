"use client";

import { Input } from "@src/components";

import * as S from "./styled";

export default function Home() {
  return (
    <S.Container>
      <h1>This app is for weather forecast.</h1>
      <Input placeholder="Write the address to predict the weather..." />
    </S.Container>
  );
}
