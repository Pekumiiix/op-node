import React, { useState } from "react";

import Home from "./home";
import navLogo from "./assets/nav-logo.svg";
import Ecosystem from "./ecosystem";

function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#token">Token</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQs</a>
        </div>

        <img src={navLogo} alt="OpNode Logo" />

        <div className="nav-btn-ctn">
          <button className="nav-btm">BUY $OPN</button>
          <i
            className="fa-solid fa-bars fa-2x p-[6px] border border-[rgb(109,28,40)] rounded-md"
            style={{ color: "rgb(109,28,40)" }}
            onClick={handleClick}
          ></i>
        </div>

        <div className={`menu ${isHidden ? "hidden" : "flex"}`}>
          <a href="#about">About</a>
          <a href="#token">Token</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQs</a>
          <a href="#">Gitbook</a>
          <button className="nav-btm">BUY $OPN</button>
        </div>
      </nav>

      <Home />

      <Ecosystem />
    </header>
  );
}

export default Header;
