import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface WeatherProps {
  forecast: string;
  setForecast: (data: string) => void;
}

export const useWeatherStore = create<WeatherProps>()(
  devtools(
    persist(
      (set) => ({
        forecast: "",
        setForecast: (data) => set(() => ({ forecast: data })),
      }),

      {
        name: "weather-storage",
      }
    )
  )
);
