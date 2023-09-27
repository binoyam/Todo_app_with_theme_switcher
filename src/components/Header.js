import React from "react";
import themeIcon from '../images/icon-sun.svg'
function Header() {
    


  return (
    <header className="header">
      <div className="title-theme-div">
        <h1 className="title">Todo</h1>
        <div className="theme-switcher">
            <img src={themeIcon} alt="light theme" />
        </div>
      </div>
    </header>
  );
}

export default Header;
