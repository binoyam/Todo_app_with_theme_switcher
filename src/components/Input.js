import React, { useState } from "react";

function Input({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
      setNewTodo(e.target.value);
    };
    const handleAddTodo = (e) => {
      e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form className="form" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={handleInputChange}
          value={newTodo}
        />
        <span className="circle"></span>
    </form>
  );
}

export default Input;
