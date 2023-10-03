import React, { useState } from "react";
import DarkthemeIcon from "../images/icon-sun.svg";
import LightthemeIcon from "../images/icon-moon.svg";

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  console.log(isDarkTheme);
  return (
    <header className={isDarkTheme ? "header" : "header light"}>
      <div className="title-theme-div">
        <h1 className="title">Todo</h1>
        <div className="theme-switcher">
          {isDarkTheme ? (
            <img onClick={toggleTheme} src={DarkthemeIcon} alt="light theme" />
          ) : (
            <img onClick={toggleTheme} src={LightthemeIcon} alt="light theme" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
