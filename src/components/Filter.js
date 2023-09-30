import React from "react";

function Filter({ todos, clearCompleted, showActive, showAll, showCompleted }) {
  
  const { id, completed } = todos;
  const CountItemsLeft = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className="controls">
      <button className="items-left">
        {todos.length < 1 ? (
          <span className="number"> No Tasks Left</span>
        ) : (
          <span>{CountItemsLeft()}</span> + "Items left"
        )}
      </button>
      <div className="list-controls">
        <button onClick={showAll} className="all">
          All
        </button>
        <button onClick={showActive} className="active">
          Active
        </button>
        <button onClick={showCompleted} className="completed">
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} className="clear-all">
        Clear Completed
      </button>
    </div>
  );
}

export default Filter;
