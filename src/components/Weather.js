import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'd8a51549326c154ac143e5daf0aa1980';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeather = async () => {
    try {
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weatherData && (
        <div>

          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>humidity: {weatherData.main.humidity}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed}</p>
          
        </div>
      )}
    </div>
  );
};

export default Weather;
