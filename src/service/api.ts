import axios from "axios";

export const apiLocation = axios.create({
  baseURL: process.env.API_LOCATION,
});

export const apiWeather = axios.create({
  baseURL: process.env.API_WEATHER,
});
