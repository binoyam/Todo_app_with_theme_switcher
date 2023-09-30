import React, { useState } from "react";
import crossIcon from "../images/icon-cross.svg";

function Todo({ todo, onRemoveTodo, onCompleteTodo }) {
  const handleCompleteClick = () => {
    onCompleteTodo(todo.id);
  };

  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };
 

  return (
    <li className="todo">
      <input
        id="checkbox"
        className="checkbox"
        type="checkbox"
        title="Mark/Unmark completed"
        checked={todo.completed}
        onChange={handleCompleteClick}
      />

      <label
        onClick={handleCompleteClick}
        style={todo.completed ? { textDecoration: "line-through" } : {}}
        className="todo-item"
      >
        {todo.newTodo}
      </label>

      <button className="remove-btn">
        <img
          src={crossIcon}
          alt="remove icon"
          title="Remove"
          onClick={handleRemoveClick}
        />
      </button>
    </li>
  );
}

export default Todo;
