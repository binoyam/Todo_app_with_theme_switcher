import React from "react";
import Todo from "./Todo";
import Filter from "./Filter";

function TodoList({ todos, onRemoveTodo, onCompleteTodo }) {
  // console.log(todos);
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            onRemoveTodo={onRemoveTodo}
            onCompleteTodo={onCompleteTodo}
          />
        );
      })}
      <Filter />
    </ul>
  );
}

export default TodoList;
