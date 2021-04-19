import React from "react";
import ShortenForm from "../ShortenForm/ShortenForm";
import "./Statistics.scss";
export default function Statistics() {
  const cardsArray = [
    {
      title: "Brand Recognition",
      details:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: "/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      details:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: "/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      details:
        "Improve brand awareness and content discoverabillity through customizable links, supercharging audience engagement.",
      icon: "/images/icon-fully-customizable.svg",
    },
  ];
  return (
    <section className="statistics">
      <div className="statistics_container">
        <ShortenForm />
        <div className="statistics_header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistics_cards">
          {cardsArray.map((card) => (
            <div className="card" key={card.title}>
              <div className="card_container">
                <img src={card.icon} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.details}</p>
              </div>
            </div>
          ))}
          <div className="blueLine"></div>
        </div>
      </div>
    </section>
  );
}
