import { render, cleanup } from "@testing-library/react";
import { Card } from "../";
afterEach(cleanup);

const forecast = {
  properties: {
    periods: [
      {
        name: "This Afternoon",
        shortForecast: "Mostly Clear",
        temperature: 84,
        temperatureUnit: "F",
        relativeHumidity: { value: 53 },
        windSpeed: "10 mph",
        windDirection: "S",
        icon: "https://api.weather.gov/icons/land/day/tsra_sct,40?size=medium",
        startTime: "2023-02-10T17:00:00-05:00",
      },
    ],
  },
};

describe("Card component", () => {
  it("renders the expected data from the API", () => {
    const { getByText } = render(<Card forecast={forecast} />);

    expect(getByText("This Afternoon")).toBeInTheDocument();
    expect(getByText("Mostly Clear")).toBeInTheDocument();
    expect(getByText("84 F")).toBeInTheDocument();
    expect(getByText("10 mph")).toBeInTheDocument();
    expect(getByText("S")).toBeInTheDocument();
  });
});
