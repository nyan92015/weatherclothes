import React from "react";
import "./Clothes.css";
const Clothes = ({ weatherData }) => {
  const t = (weatherData.main.temp / 10).toFixed(1);
  const h = weatherData.main.humidity;
  const v = weatherData.wind.speed;

  const A = 1.76 + 1.4 * Math.pow(v, 0.75);
  const Tm =
    37 - (37 - t) / (0.68 - 0.0014 * h + 1 / A) - 0.29 * t * (1 - h / 100);
  return (
    <div class="clothes">
      <img src="T-shirt.png" class="T-shirt" />
      <img src="shirt.png" class="shirt" />
      <img src="poro.png" class="poro" />
      <img src="pants.png" class="pants" />
      <img src="skirt.png" class="skirt" />
    </div>
  );
};

export default Clothes;
