import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <form className="form">
          <div className="input-div">
            <input type="text" placeholder="Create a new todo..." />
            <span className="circle"></span>
          </div>
        </form>
          <ul className="list">
            <li>new item</li>
            <li>new item</li>
            <li>new item</li>
            <li>new item</li>
          </ul>
      </main>
    </div>
  );
}

export default App;
