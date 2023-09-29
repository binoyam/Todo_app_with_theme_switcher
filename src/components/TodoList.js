import React from "react";
import Todo from "./Todo";

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
    </ul>
  );
}

export default TodoList;
