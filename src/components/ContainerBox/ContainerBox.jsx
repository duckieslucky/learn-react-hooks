import React from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import "./ContainerBox.scss";

ContainerBox.propTypes = {
  itemList: PropTypes.array,
};

ContainerBox.defaultProps = {
  itemList: [],
};

function ContainerBox(props) {
  const { itemList } = props;
  return (
    <div className="container-box">
      {itemList.map((item) => (
        <Box key={item.id} content={item.title} />
      ))}
    </div>
  );
}

export default ContainerBox;
