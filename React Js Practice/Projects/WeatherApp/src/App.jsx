import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import InputForm from "./Components/InputForm";
import DisplayWeather from "./Components/DisplayWeather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "29dc7a796b1d1f6c53f624cf17046f7b";

  const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      setLoading(true);
      const responce = await axios.get(url);
      setWeatherData(responce.data);
    } catch (error) {
      alert("City Not Found");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not Working");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        try {
          setLoading(true);
          const response = await axios.get(url);
          setWeatherData(response.data);
        } catch (error) {
          alert("Unable to fetch weather data for your location.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return (
    <>
      {/* <h1>Weather App</h1> */}
      <InputForm getWeather={getWeather} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        weatherData && <DisplayWeather data={weatherData} />
      )}
    </>
  );
}

export default App;
