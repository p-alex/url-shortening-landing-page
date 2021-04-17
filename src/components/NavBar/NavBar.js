import React from "react";
import "./NavBar.scss";
export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav_container">
        <img src="/images/logo.svg" alt="logo" />
        <div className="nav_links">
          <ul className="nav_linkContainer">
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
          <ul className="nav_linkContainer">
            <li>
              <a href="/">Login</a>
            </li>
            <li className="special">
              <a href="/">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
