import { useState, ChangeEvent } from "react";
import { abbr } from "us-state-converter";
import axios from "axios";

import { ForecastResponseProps } from "@src/types/forecast";
import { FormProps } from "./types";
import { useForecastStore } from "../../context/forecast";

export const useWeather = () => {
  const [formData, setFormData] = useState<FormProps>({
    street: "",
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setForecast } = useForecastStore();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

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
      const { data } = await axios.post<ForecastResponseProps>("/api/presage", {
        ...formData,
        state:
          formData.state.length > 2 ? abbr(formData.state) : formData.state,
      });

      setForecast(data);
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
