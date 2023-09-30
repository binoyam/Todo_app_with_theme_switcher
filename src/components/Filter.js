import React from "react";

function Filter({ todos, clearCompleted, showActive, showAll, showCompleted }) {
  return (
    <div className="controls">
      <button className="items-left">
        <span className="number">4 </span>
        items left
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
