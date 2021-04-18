import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import "./App.scss";
import BoostToday from "./components/BoostToday/BoostToday";
import Footer from "./components/Footer/Footer";
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
