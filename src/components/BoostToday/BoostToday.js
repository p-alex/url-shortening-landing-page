import React from "react";
import "./BoostToday.scss";
export default function BoostToday() {
  return (
    <section
      className="boost"
      style={{ backgroundImage: "url(/images/bg-boost-desktop.svg)" }}
    >
      <div className="boost_container">
        <h2>Boost your links today</h2>
        <a href="/">Get Started</a>
      </div>
    </section>
  );
}
