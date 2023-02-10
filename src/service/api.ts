import axios from "axios";

export const API_LOCATION = axios.create({
  baseURL: process.env.API_LOCATION,
});

export const API_WEATHER = axios.create({
  baseURL: process.env.API_WEATHER,
});
