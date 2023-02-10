import { useState, ChangeEvent } from "react";
import axios from "axios";

import { ForecastResponseProps } from "@src/types/forecast";
import { FormProps } from "./types";
import { useForecastStore } from "@context/forecast";

const initialState = {
  street: "",
  city: "",
  state: "",
};

export const useWeather = () => {
  const [formData, setFormData] = useState<FormProps>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setForecast, forecast } = useForecastStore();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async () => {
    setForecast({ properties: { periods: [] } });
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post<ForecastResponseProps>(
        "/api/presage",
        formData
      );

      setForecast(data);
      console.log(forecast);
      setLoading(false);
    } catch (error: any) {
      if (error.response.status === 400) {
        setError("Fill all fields");
      } else {
        setError("Prove valid information");
      }

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
