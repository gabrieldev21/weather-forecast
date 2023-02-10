export interface ForecastResponseProps {
  properties?: {
    periods: {
      number: number;
      name: string;
      startTime: string;
      endTime: string;
      isDaytime: boolean;
      temperature: number;
      temperatureUnit: string;
      probabilityOfPrecipitation: {
        unitCode: string;
        value: number;
      };
      dewpoint: {
        unitCode: string;
        value: number;
      };
      relativeHumidity: {
        unitCode: string;
        value: number;
      };
      windSpeed: string;
      windDirection: string;
      icon: string;
      shortForecast: string;
      detailedForecast: string;
    }[];
  };
}
