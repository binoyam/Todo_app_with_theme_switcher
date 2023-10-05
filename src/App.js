import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
/* FUNCTIONS LEFT TO DO
1, DRAG AND DROP FUNCTION
 */
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  /* THEME SWITCHER */
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const handleShowAll = () => {
    setFilter("all");
  };
  const handleShowActive = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    if (activeTodos.length <= 0) {
      setFilter("all");
    } else {
      setFilter("active");
    }
  };
  /*  CHECK IF THERE ARE COMPLETED TODOS AND THEN SET THE FILTER*/
  const handleShowCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    if (completedTodos.length <= 0) {
      setFilter("all");
    }
    if (completedTodos.length > 0) {
      setFilter("completed");
    } else {
      setFilter("all");
    }
  };

  const handleAddTodo = (newTodo) => {
    setTodos([{ id: Date.now(), newTodo, completed: false }, ...todos]);
    setFilter("all");
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
    if (todos.length > 0) {
      setFilter("all");
    }
  };

  return (
    <div className={isDarkTheme ? "app" : "app light"}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

      <main className="main">
        <Input isDarkTheme={isDarkTheme} onAddTodo={handleAddTodo} />

        <TodoList
          isDarkTheme={isDarkTheme}
          todos={filteredTodos}
          onCompleteTodo={handleCompleteTodo}
          onRemoveTodo={handleRemoveTodo}
        />
        <Filter
          isDarkTheme={isDarkTheme}
          todos={todos}
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
