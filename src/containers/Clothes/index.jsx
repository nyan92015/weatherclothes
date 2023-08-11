import React from "react";
import "./Clothes.css";
import Cloth from "../Cloth";
const Clothes = ({ weatherData }) => {
  const t = (weatherData.main.temp / 10).toFixed(1);
  const h = weatherData.main.humidity;
  const v = weatherData.wind.speed;

  const A = 1.76 + 1.4 * Math.pow(v, 0.75);
  const Tm =
    37 - (37 - t) / (0.68 - 0.0014 * h + 1 / A) - 0.29 * t * (1 - h / 100);

  return (
    <div class="clothes">
      {Tm < 10 && (
        <>
          <Cloth clothName={"downjacket"} />
          <Cloth clothName={"hoodies"} />
          <Cloth clothName={"outer"} />
        </>
      )}
      {Tm >= 10 && Tm < 20 && (
        <>
          <Cloth clothName={"hoodies"} />
          <Cloth clothName={"jacket"} />
          <Cloth clothName={"outer"} />
        </>
      )}
      {Tm >= 20 && Tm < 24 && (
        <>
          <Cloth clothName={"Y-shirt"} />
          <Cloth clothName={"Y-shirt-long"} />
          <Cloth clothName={"trainer"} />
        </>
      )}
      {Tm >= 24 && (
        <>
          <Cloth clothName={"T-shirt"} />
          <Cloth clothName={"T-shirt-long"} />
          <Cloth clothName={"poro"} />
        </>
      )}
      <Cloth clothName={"pants"} />
      <Cloth clothName={"skirt"} />
    </div>
  );
};

export default Clothes;
