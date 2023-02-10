import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import cookie from "js-cookie";

import { ActionType, ForecastProps } from "./types";

const initialState: ForecastProps = {
  forecast: JSON.parse(cookie.get("forecast") || "{}") || {
    properties: { periods: [] },
  },
  setForecast: () => {},
};

const Context = createContext<ForecastProps>(initialState);

const Reducer = (state: ForecastProps, action: ActionType) => {
  switch (action.type) {
    case "SET_FORECAST":
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
};

export const ForecastProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const forecastCookie = cookie.get("forecast");

    if (forecastCookie) {
      dispatch({ type: "SET_FORECAST", payload: JSON.parse(forecastCookie) });
    }
  }, []);

  useEffect(() => {
    cookie.set("forecast", JSON.stringify(state.forecast));
  }, [state.forecast]);

  return (
    <Context.Provider
      value={{
        ...state,
        setForecast: (data) =>
          dispatch({ type: "SET_FORECAST", payload: data }),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useForecastStore = () => useContext(Context);
