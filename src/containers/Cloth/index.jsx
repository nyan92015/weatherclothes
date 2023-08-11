import React, { useState } from "react";
import ColorButton from "../ColorButton";

const Cloth = ({ clothName }) => {
  const [color, setColor] = useState("blue");
  return (
    <>
      <ColorButton setColor={setColor} />
      <img src={`${clothName}/${color}.png`} className={clothName} />
    </>
  );
};

export default Cloth;
