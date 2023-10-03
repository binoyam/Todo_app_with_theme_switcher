import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
/* FUNCTIONS LEFT TO DO
2, DRAG AND DROP FUNCTION
3, THEME SWITCHER FUNCTION
 */
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLightTheme, setIsLightTheme] = useState(false);

  // const toggleTheme = () => {
  //   setDarkTheme(!isLightTheme)
  // }
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
    <div className="app">
      <Header />

      <main className="main">
        <Input theme={isLightTheme} onAddTodo={handleAddTodo} />

        <TodoList
          theme={isLightTheme}
          todos={filteredTodos}
          onCompleteTodo={handleCompleteTodo}
          onRemoveTodo={handleRemoveTodo}
        />
        <Filter
          theme={isLightTheme}
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
