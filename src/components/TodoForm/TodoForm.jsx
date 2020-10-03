import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const { onSubmit } = props;
  const [values, setValues] = useState({
    title: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;

    //process
    onSubmit(values);
    setValues({ title: "" });
  }

  function handleValuesChange(e) {
    setValues({ title: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">Your Plan: </label>
        <input
          type="text"
          id="newTodo"
          className="newTodo"
          placeholder="input your plan here..."
          onChange={handleValuesChange}
          value={values.title}
        ></input>
      </form>
    </div>
  );
}

export default TodoForm;
