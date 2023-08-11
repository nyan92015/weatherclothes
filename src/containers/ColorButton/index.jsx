import React from "react";
import "./ColorButton.css";

const ColorButton = ({ setColor }) => {
  const onColorChange = (color) => {
    setColor(color);
  };
  return (
    <div class="color">
      <button
        class="black"
        type="button"
        onClick={() => {
          onColorChange("black");
        }}
      ></button>
      <button
        class="brown"
        type="button"
        onClick={() => {
          onColorChange("brown");
        }}
      ></button>
      <button
        class="navy"
        type="button"
        onClick={() => {
          onColorChange("navy");
        }}
      ></button>
      <button
        class="green"
        type="button"
        onClick={() => {
          onColorChange("green");
        }}
      ></button>
      <button
        class="blue"
        type="button"
        onClick={() => {
          onColorChange("blue");
        }}
      ></button>
      <button
        class="white"
        type="button"
        onClick={() => {
          onColorChange("white");
        }}
      ></button>
      <button
        class="yellow"
        type="button"
        onClick={() => {
          onColorChange("yellow");
        }}
      ></button>
      <button
        class="pink"
        type="button"
        onClick={() => {
          onColorChange("pink");
        }}
      ></button>
    </div>
  );
};

export default ColorButton;
