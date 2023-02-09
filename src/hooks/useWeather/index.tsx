import { useState } from "react";
import axios from "axios";

import { FormProps } from "./types";

export const useWeather = () => {
  const [formData, setFormData] = useState<FormProps>({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/geolocation", formData);
      const latitude = data.result.addressMatches[0].coordinates.y;
      const longitude = data.result.addressMatches[0].coordinates.x;

      const { data: weatherData } = await axios.post("/api/forecast", {
        latitude,
        longitude,
      });
      console.log(weatherData);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return {
    formData,
    handleInputChange,
    fetchData,
    loading,
    error,
  };
};
