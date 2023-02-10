import Image from "next/image";

import { CardProps } from "./types";
import * as S from "./styled";

export const Card = ({ forecast }: CardProps) => {
  return (
    <S.Container>
      {forecast?.properties?.periods.map((item) => (
        <S.Content key={item.name}>
          <h3>{item.name}</h3>
          <p>
            <strong>Temperature: </strong>
            {item.temperature} {item.temperatureUnit}
          </p>
          <p>
            <strong>Probability of Precipitation: </strong>
            {item.probabilityOfPrecipitation.value}
            {item.probabilityOfPrecipitation.unitCode}
          </p>
          <p>
            <strong>Relative Humidity: </strong>
            {item.relativeHumidity.value} {item.relativeHumidity.unitCode}
          </p>

          <p>
            <strong>Wind Speed: </strong>
            {item.windSpeed}
          </p>
          <p>
            <strong>Wind Direction: </strong>
            {item.windDirection}
          </p>
          <p>
            <strong>Short Forecast: </strong>
            {item.shortForecast}
          </p>
          <p>
            <strong>Detailed Forecast: </strong>
            {item.detailedForecast}
          </p>
          <Image
            src={item.icon}
            alt={`Icon for ${item.name}`}
            width={250}
            height={150}
          />
        </S.Content>
      ))}
    </S.Container>
  );
};
