"use client";

import { Input, Button, Loader } from "@src/components";
import { useWeather } from "@hooks/useWeather";

import * as S from "./styled";

export default function Home() {
  const { formData, handleInputChange, fetchData, loading, error } =
    useWeather();

  return (
    <S.Container>
      <S.Title>
        <h2>This app is for Upstart 13.</h2>
        <h2>Weather Forecast.</h2>
      </S.Title>
      <S.Content>
        <Input
          placeholder="Write the Street ..."
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Write the City ..."
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Write the State ..."
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Write the Zip Code ..."
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
        />
        <Button onClick={fetchData} title="Search" />

        {loading && <Loader />}
      </S.Content>
    </S.Container>
  );
}
