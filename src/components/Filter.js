import React from "react";

function Filter({ todos, handleClearAll }) {
  return (
    <div className="controls">
      <button className="items-left">
        <span className="number">4 </span>
        items left
      </button>
      <div className="list-controls">
        <button className="all">All</button>
        <button className="active">Active</button>
        <button 
        onClick={handleClearAll} 
        className="completed">
          Completed
        </button>
      </div>
      <button className="clear-all">Clear Completed</button>
    </div>
  );
}

export default Filter;
