export interface WeatherResponseProps {
  properties: {
    forecast: string;
  };
}

export interface GeoResponseProps {
  result: {
    addressMatches: [
      {
        coordinates: {
          x: number;
          y: number;
        };
      }
    ];
  };
}
