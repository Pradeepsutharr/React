import React, { useState } from "react";

function InputForm({ getWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    getWeather(city);
    setCity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}

export default InputForm;
