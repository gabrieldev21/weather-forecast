import { ForecastResponseProps } from "@src/types/forecast";
import { render } from "@testing-library/react";
import { Card } from "../";

describe("Card component", () => {
  test("renders correctly with the forecast data", () => {
    const forecast: ForecastResponseProps = {
      properties: {
        periods: [
          {
            number: 1,
            name: "Today",
            startTime: "2023-02-10T00:00:00",
            endTime: "2023-02-10T23:59:59",
            isDaytime: true,
            temperature: 70,
            temperatureUnit: "F",
            probabilityOfPrecipitation: {
              unitCode: "",
              value: 20,
            },
            dewpoint: {
              unitCode: "F",
              value: 50,
            },
            relativeHumidity: {
              unitCode: "",
              value: 50,
            },
            windSpeed: "10 mph",
            windDirection: "North",
            icon: "https://example.com/icon.png",
            shortForecast: "Partly Cloudy",
            detailedForecast: "Some clouds with a chance of rain.",
          },
        ],
      },
    };

    const { getByText } = render(<Card forecast={forecast} />);

    expect(getByText("Today")).toHaveTextContent("Today");
    expect(getByText("Temperature: 70 F")).toHaveTextContent(
      "Temperature: 70 F"
    );
    expect(getByText("Probability of Precipitation: 20%")).toHaveTextContent(
      "Probability of Precipitation: 20%"
    );
    expect(getByText("Relative Humidity: 50%")).toHaveTextContent(
      "Relative Humidity: 50%"
    );
    expect(getByText("Wind Speed: 10 mph")).toHaveTextContent(
      "Wind Speed: 10 mph"
    );
    expect(getByText("Wind Direction: North")).toHaveTextContent(
      "Wind Direction: North"
    );
    expect(getByText("Partly Cloudy")).toHaveTextContent("Partly Cloudy");
    expect(getByText("Some clouds with a chance of rain.")).toHaveTextContent(
      "Some clouds with a chance of rain."
    );
  });

  test("renders correctly with an empty forecast data", () => {
    const forecast = {};
    const { container } = render(<Card forecast={forecast} />);

    expect(container.firstChild).toBeTruthy();
  });
});
