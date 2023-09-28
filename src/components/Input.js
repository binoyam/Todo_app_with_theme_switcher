import React, { useState } from "react";
import TodoList from "./TodoList";

function Input() {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  return (
    <>
      <form className="form">
        <div className="input-div">
          <input
            type="text"
            placeholder="Create a new todo..."
            onChange={handleInputChange}
            value={newTodo}
          />
          <span className="circle"></span>
        </div>
      </form>
      <TodoList />
    </>
  );
}

export default Input;
