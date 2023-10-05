import React from "react";

function Filter({
  isDarkTheme,
  todos,
  clearCompleted,
  showActive,
  showAll,
  showCompleted,
}) {
  const CountItemsLeft = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className={isDarkTheme ? "controls" : "controls light"}>
      <button className="items-left">
        {CountItemsLeft() > 0 ? (
          <span className="number">{CountItemsLeft()} Items Left</span>
        ) : (
          <span className="number">No Tasks Left</span>
        )}
      </button>
      <div className={isDarkTheme ? "list-controls" : "list-controls light"}>
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
