import { render } from "@testing-library/react";

import { ForecastResponseProps } from "@src/types/forecast";
import { Card } from "../";

const forecast: ForecastResponseProps = {
  properties: {
    periods: [
      {
        name: "Today",
        shortForecast: "Partly Cloudy",
        temperature: 72,
        temperatureUnit: "F",
        relativeHumidity: { value: 60 },
        windSpeed: "8 mph",
        windDirection: "S",
        icon: "https://example.com/icon.png",
        startTime: "2022-02-10T12:00:00-05:00",
      },
      {
        name: "Tomorrow",
        shortForecast: "Sunny",
        temperature: 68,
        temperatureUnit: "F",
        relativeHumidity: { value: 50 },
        windSpeed: "12 mph",
        windDirection: "N",
        icon: "https://example.com/icon2.png",
        startTime: "2022-02-11T12:00:00-05:00",
      },
    ],
  },
};

describe("Card", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Card forecast={forecast} />);

    expect(getByText("Today")).toBeInTheDocument();
    expect(getByText("Partly Cloudy")).toBeInTheDocument();
    expect(getByText("Temperature: ")).toBeInTheDocument();
    expect(getByText("72 F")).toBeInTheDocument();
    expect(getByText("Relative Humidity: 60%")).toBeInTheDocument();
    expect(getByText("Wind Speed: 8 mph")).toBeInTheDocument();
    expect(getByText("Wind Direction: S")).toBeInTheDocument();
    expect(getByText("Tomorrow")).toBeInTheDocument();
    expect(getByText("Forecast: Sunny")).toBeInTheDocument();
    expect(getByText("Temperature: 68 F")).toBeInTheDocument();
    expect(getByText("Relative Humidity: 50%")).toBeInTheDocument();
    expect(getByText("Wind Speed: 12 mph")).toBeInTheDocument();
    expect(getByText("Wind Direction: N")).toBeInTheDocument();
  });
});
