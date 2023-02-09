import { NextApiRequest, NextApiResponse } from "next";
import { API_LOCATION } from "@src/service/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { street, city, state, zip } = req.body;

  if (!street) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const { data } = await API_LOCATION.get(
      `address?street=${street}&city=${city}&state=${state}&zip=${zip}&benchmark=Public_AR_Census2020&format=json`
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
