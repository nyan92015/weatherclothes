import React, { useEffect, useState } from "react";
import WeatherForecast from "../WeatherForecast";
import Clothes from "../Clothes";
import "./Body2.css";
import { getWeather } from "../../openWheatherMap/getWeather";

const Body2 = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather("965-0816");
      setWeatherData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading</div>;

  return (
    <div class="body2">
      <WeatherForecast weatherData={weatherData} />
      <img src="person.png" class="person" />
      <Clothes weatherData={weatherData} />
    </div>
  );
};

export default Body2;
