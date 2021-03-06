import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="footer_links">
          <ul>
            <li>Features</li>
            <li>
              <a href="/">Link Shortening</a>
            </li>
            <li>
              <a href="/">Branded Links</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Developers</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
          <ul>
            <li>Company</li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Out Team</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_social">
          <a href="/">
            <img src="/images/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="/">
            <img src="/images/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="/">
            <img src="/images/icon-pinterest.svg" alt="pinterest" />
          </a>
          <a href="/">
            <img src="/images/icon-instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
      <span className="footer_credit">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/solutions"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/p-alex"
          target="_blank"
          rel="noreferrer"
        >
          Alex Daniel
        </a>
        .
      </span>
    </footer>
  );
}
