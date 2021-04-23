import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import Header from "./components/Header/Header";
import BoostToday from "./components/BoostToday/BoostToday";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";
if (localStorage.getItem("shortenLinks") === null) {
  localStorage.setItem("shortenLinks", "[]");
}
function App() {
  return (
    <>
      <NavBar />
      <MobileNavBar />
      <Header />
      <Statistics />
      <BoostToday />
      <Footer />
    </>
  );
}

export default App;
