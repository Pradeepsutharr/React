import React from "react";

function DisplayWeather({ data }) {
  const { name, sys, main, weather } = data;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];

  return (
    <div>
      <h2>
        {name}, {sys.country}
      </h2>
      <p>Temperature: {temp}°C</p>
      <p>Weather: {description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>Humidity: {humidity}%</p>
    </div>
  );
}

export default DisplayWeather;
