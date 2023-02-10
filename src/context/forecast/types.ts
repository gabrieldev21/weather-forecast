import { ForecastResponseProps } from "@src/types/forecast";

export interface ForecastProps {
  forecast: ForecastResponseProps;
  setForecast: (data: ForecastResponseProps) => void;
}

export interface ActionType {
  type: "SET_FORECAST";
  payload: ForecastResponseProps;
}
