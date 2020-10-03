import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const { todoList, onTodoClick } = props;

  function handleClick(item) {
    if (onTodoClick) {
      onTodoClick(item);
    }
  }

  return (
    <ul>
      {todoList.map((todo) => (
        <li
          className="todo-item"
          key={todo.id}
          onClick={() => handleClick(todo)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

export default TodoList;
