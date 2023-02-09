import { NextApiRequest, NextApiResponse } from "next";
import { API_WEATHER } from "@src/service/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { latitude, longitude } = req.body;

  try {
    const { data } = await API_WEATHER.get(`${latitude},${longitude}`);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
