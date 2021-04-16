import React, { useState } from "react";
import "./MobileNavBar.scss";
export default function MobileNavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navMobile">
      <img src="/images/logo.svg" alt="logo" />
      <i className="fas fa-bars" onClick={() => setIsActive(!isActive)}></i>

      {isActive && (
        <div className="navMobile_dropdown">
          <ul className="navMobile-linksContainer">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
          <ul className="navMobile-linksContainer">
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/" className="special">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
