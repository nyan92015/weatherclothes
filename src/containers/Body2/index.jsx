import React from "react";
import WeatherForecast from "../WeatherForecast";
import Clothes from "../Clothes";
import "./Body2.css";

const Body2 = () => {
  return (
    <div class="body2">
      <WeatherForecast />
      <img src="person.png" class="person" />
      <Clothes />
    </div>
  );
};

export default Body2;
