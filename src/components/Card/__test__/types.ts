export interface CardProps {
  forecast: {
    properties: {
      periods: Array<{
        name: string;
        temperature: string;
        temperatureUnit: string;
        probabilityOfPrecipitation: {
          value: string;
          unitCode: string;
        };
        relativeHumidity: {
          value: string;
          unitCode: string;
        };
        windSpeed: string;
        windDirection: string;
        shortForecast: string;
        detailedForecast: string;
        icon: string;
      }>;
    };
  };
}
