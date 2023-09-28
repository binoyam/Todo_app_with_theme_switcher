import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Input addTodo={addTodo} />
        <TodoList todos={todos} />
      </main>
    </div>
  );
}

export default App;
