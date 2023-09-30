import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleShowAll = () => {
    setFilter("all");
  };
  const handleShowActive = () => {
    setFilter("active");
  };
  const handleShowCompleted = () => {
    setFilter("completed");
  };

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed; 
    }
    return true;
  });
  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Input onAddTodo={handleAddTodo} />

        <TodoList
          todos={filteredTodos}
          onCompleteTodo={handleCompleteTodo}
          onRemoveTodo={handleRemoveTodo}
        />
        <Filter
          todos={filteredTodos}
          clearCompleted={handleClearCompleted}
          showActive={handleShowActive}
          showAll={handleShowAll}
          showCompleted={handleShowCompleted}
        />
      </main>
    </div>
  );
}

export default App;
