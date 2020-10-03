import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Box.scss";
import useMagicColor from "../../hooks/useMagicColor";

Box.propTypes = {
  content: PropTypes.string,
};

Box.defaultProps = {
  content: "?",
};

function Box(props) {
  const { content } = props;
  const color = useMagicColor();
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <p>{content.toUpperCase().charAt(0)}</p>
    </div>
  );
}

export default Box;
