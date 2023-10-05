import React from "react";
import Todo from "./Todo";

function TodoList({ isDarkTheme, todos, onRemoveTodo, onCompleteTodo }) {
  // console.log(todos);
  return (
    <ul className={isDarkTheme ? "list" : "list light"}>
      {todos.length ? (
        todos.map((todo) => {
          return (
            <Todo
              isDarkTheme={isDarkTheme}
              todo={todo}
              key={todo.id}
              onRemoveTodo={onRemoveTodo}
              onCompleteTodo={onCompleteTodo}
            />
          );
        })
      ) : (
        <li className={isDarkTheme ? "empty-todo" : "empty-todo light"}>
          Start Adding Tasks
        </li>
      )}
    </ul>
  );
}

export default TodoList;
