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
      <div className="controls">
        <button className="items-left">
          <span className="number">4 </span>
          items left
        </button>
        <div className="list-controls">
          <button className="all">All</button>
          <button className="active">Active</button>
          <button className="completed">Completed</button>
        </div>
        <button className="clear-all">Clear Completed</button>
      </div>
    </ul>
  );
}

export default TodoList;
