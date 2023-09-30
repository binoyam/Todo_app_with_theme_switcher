import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([{ id: Date.now(), newTodo, completed: false }, ...todos]);
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleClearAll = () => {
    setTodos([])
  }

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Input onAddTodo={handleAddTodo} />

        <TodoList
          todos={todos}
          onCompleteTodo={handleCompleteTodo}
          onRemoveTodo={handleRemoveTodo}
        />
         <Filter 
         todos={todos}
         handleClearAll={handleClearAll}
         />
      </main>
    </div>
  );
}

export default App;
