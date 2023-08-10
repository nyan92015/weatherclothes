import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import { getWeather } from "../../openWheatherMap/getWeather";
import Date from "../../components/Date";
const WeatherForecast = ({ weatherData, isLoading }) => {
  if (isLoading) return <div>Loading</div>;

  return (
    <div class="weatherforecast">
      <Date />
      <div class="location">{weatherData.name}</div>
      <div class="temperature">{(weatherData.main.temp / 10).toFixed(1)}°</div>
      <div class="weather">{weatherData.weather[0].main}</div>
      <div class="high_low_temperature">
        <div class="high_temperature">
          最高:{(weatherData.main.temp_max / 10).toFixed(1)}°
        </div>
        <div class="low_temperature">
          最低:{(weatherData.main.temp_min / 10).toFixed(1)}°
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
