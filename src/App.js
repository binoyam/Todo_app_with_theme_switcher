import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), newTodo, completed: false }]);
  };
  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Input onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
      </main>
    </div>
  );
}

export default App;
