import React, { useEffect, useState } from "react";

function getRandomColor() {
  const COLORS = [
    "INDIANRED",
    "IGHTCORA",
    "SALMON",
    "DARKSALMON",
    "LIGHTSALMON",
  ];

  const rIndex = Math.trunc(Math.random() * COLORS.length);
  return COLORS[rIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transfarent");

  useEffect(() => {
    const timer = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [color]);

  return color;
}

export default useMagicColor;
