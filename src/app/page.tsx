"use client";

import { Input, Button, Loader, Card } from "@src/components";
import { useForecastStore } from "@context/forecast";
import { useWeather } from "@hooks/useWeather";

import * as S from "./styled";

export default function Home() {
  const { formData, handleInputChange, fetchData, loading, error } =
    useWeather();
  const { forecast } = useForecastStore();

  return (
    <S.Container>
      <S.Content>
        <h1>Weather Forecast</h1>
        <Input
          placeholder="Write the Street ...  as 4600 Silver Hill Rd "
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Write the City ... as Washington"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Write the State ... as DC"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <Button onClick={fetchData} title="Search" />
      </S.Content>
      <>
        {forecast && <Card forecast={forecast} />}
        {error && error}
        {loading && <Loader />}
      </>
    </S.Container>
  );
}
