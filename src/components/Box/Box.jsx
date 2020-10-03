import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Box.scss";

Box.propTypes = {
  content: PropTypes.string,
};

Box.defaultProps = {
  content: "?",
};
function getRandomColor() {
  const COLOR_LIST = ["green", "blue", "pink", "yellow"];
  const index = Math.trunc(Math.random() * COLOR_LIST.length);
  // console.log(color);
  //if(localStorage.getItem('box-color')===)
  return COLOR_LIST[index];
}

function Box(props) {
  const [color, setColor] = useState(() => {
    return getRandomColor();
    //return localStorage.getItem("box-color") || "deeppink";
  });

  const { content } = props;

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    //save color
    localStorage.setItem("box-color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      <p>{content.toUpperCase().charAt(0)}</p>
    </div>
  );
}

export default Box;
