import React from "react";
import "./Header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_content">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="/">Get Started</a>
        </div>
        <div className="header_image">
          <img src="/images/illustration-working.svg" alt="ilustration" />
        </div>
      </div>
    </header>
  );
}
