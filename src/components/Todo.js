import React from "react";
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
      <div>
        <input
          className="checkbox"
          type="checkbox"
          title="Mark as complete"
          checked={todo.completed}
          onChange={handleCompleteClick}
        />
       <span className="todo-item">
       {todo.newTodo}
        </span> 
      </div>
      <button className="remove-btn">
        <img
          src={crossIcon}
          alt="remove icon"
          title="Remove-Task"
          onClick={handleRemoveClick}
        />
      </button>
    </li>
  );
}

export default Todo;
