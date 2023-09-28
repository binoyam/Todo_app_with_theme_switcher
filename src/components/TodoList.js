import React from "react";
import crossIcon from "../images/icon-cross.svg";
import { toBeChecked } from "@testing-library/jest-dom/matchers";

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
            type="checkbox"
            title="Mark as complete"
            toBeChecked
            />
            {todo}
            </div>
            <button className="remove-btn">
            <img 
            src={crossIcon} 
            alt="remove icon"
            title="Remove-Task"
            />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
