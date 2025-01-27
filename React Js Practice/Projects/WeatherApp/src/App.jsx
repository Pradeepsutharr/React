import { useState } from "react";
import "./App.css";
import axios from "axios";
import InputForm from "./Components/InputForm";
import DisplayWeather from "./Components/DisplayWeather";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (city) => {
    const API_KEY = "29dc7a796b1d1f6c53f624cf17046f7b";
    // const url = ;

    try {
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(responce.data);
    } catch (error) {
      alert("City Not Found");
    }
  };

  return (
    <>
      <h1>Weather App</h1>
      <InputForm getWeather={getWeather} />
      {weatherData && <DisplayWeather data={weatherData} />}
    </>
  );
}

export default App;
