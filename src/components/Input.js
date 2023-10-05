import React, { useState } from "react";

function Input({ isDarkTheme, onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form className="form" onSubmit={handleAddTodo}>
      <input
        className={isDarkTheme ? "input" : "input light"}
        type="text"
        placeholder="Create a new todo..."
        onChange={handleInputChange}
        value={newTodo}
      />
      <span
        onClick={handleAddTodo}
        className={isDarkTheme ? "circle" : "circle light"}
      ></span>
    </form>
  );
}

export default Input;
