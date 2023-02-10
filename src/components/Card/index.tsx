import Image from "next/image";

import { formattedDate } from "@utils/formattedDate";
import { CardProps } from "./types";
import * as S from "./styled";

export const Card = ({ forecast }: CardProps) => {
  return (
    <S.Container>
      {forecast?.properties?.periods.map((item) => (
        <S.Content key={item.name}>
          <h3>{item.name}</h3>
          <p>
            <strong>Forecast: </strong>
            {item.shortForecast}
          </p>
          <p>
            <strong>Temperature: </strong>
            {item.temperature} {item.temperatureUnit}
          </p>
          <p>
            <strong>Relative Humidity: </strong>
            {item.relativeHumidity.value}%
          </p>

          <p>
            <strong>Wind Speed: </strong>
            {item.windSpeed}
          </p>
          <p>
            <strong>Wind Direction: </strong>
            {item.windDirection}
          </p>
          <Image
            src={item.icon}
            alt={`Icon for ${item.name}`}
            width={250}
            height={150}
          />
          <span>{formattedDate(item.startTime)}</span>
        </S.Content>
      ))}
    </S.Container>
  );
};
