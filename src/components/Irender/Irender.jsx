import React from "react";
import PropTypes from "prop-types";

Irender.propTypes = {
  name: PropTypes.string,
};

Irender.defaultProps = {
  name: "",
};

function Irender(props) {
  const { name } = props;
  console.log("re-render");
  return (
    <div>
      <p>I will console when i was re-render. My name is: {name}</p>
    </div>
  );
}

export default React.memo(Irender);
