import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { API_LOCATION, API_WEATHER } from "@src/service/api";
import { ForecastResponseProps } from "@src/types/forecast";
import { GeoResponseProps, WeatherResponseProps } from "./types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { street, city, state, zip } = req.body;

  if (!street || !city || !state) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const {
      data: {
        result: { addressMatches },
      },
    } = await API_LOCATION.get<GeoResponseProps>(
      `address?street=${street}&city=${city}&state=${state}&zip=${zip}&benchmark=Public_AR_Census2020&format=json`
    );

    const { data: weather } = await API_WEATHER.get<WeatherResponseProps>(
      `points/${addressMatches[0].coordinates.y},${addressMatches[0].coordinates.x}`
    );

    const { data: forecast } = await axios.get<ForecastResponseProps>(
      weather.properties.forecast
    );

    res.status(200).json(forecast);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
