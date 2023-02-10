import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";

import { useWeather } from "../";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useWeather hook", () => {
  it("fetches data from the API and sets it in the context", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        properties: {
          periods: [
            {
              temperature: 72,
              windSpeed: "8 mph",
            },
            {
              temperature: 68,
              windSpeed: "12 mph",
            },
          ],
        },
      },
    });

    const TestComponent = () => {
      const { formData, handleInputChange, fetchData, loading, error } =
        useWeather();

      return (
        <div>
          <input
            name="Street"
            placeholder="Street"
            onChange={handleInputChange}
            value={formData.street}
          />
          <input
            name="City"
            placeholder="City"
            onChange={handleInputChange}
            value={formData.city}
          />
          <input
            name="State"
            placeholder="State"
            onChange={handleInputChange}
            value={formData.state}
          />
          <button onClick={fetchData}>Get Forecast</button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      );
    };

    const { getByText, getByPlaceholderText } = render(<TestComponent />);
    const streetInput = getByPlaceholderText("Street");
    const cityInput = getByPlaceholderText("City");
    const stateInput = getByPlaceholderText("State");
    const button = getByText("Get Forecast");

    fireEvent.change(streetInput, { target: { value: "123 Main St" } });
    fireEvent.change(cityInput, { target: { value: "San Francisco" } });
    fireEvent.change(stateInput, { target: { value: "California" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "/api/presage",
        {
          Street: "123 Main St",
          City: "San Francisco",
          State: "California",
        },
        undefined
      );
    });
  });
});
