import React from "react";
import crossIcon from "../images/icon-cross.svg";

function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul className="list">
      {todos.map((todo, index) => {
        return (
          <li 
          className="todo"
           key={index}>
            <div>
            <input 
            className="checkbox"
            type="checkbox" />
            {todo}
            </div>
            <button className="remove-btn">
            <img src={crossIcon} alt="remove icon" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
