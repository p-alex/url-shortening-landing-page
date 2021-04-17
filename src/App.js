import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import "./App.scss";
function App() {
  return (
    <>
      <NavBar />
      <MobileNavBar />
      <Header />
      <Statistics />
    </>
  );
}

export default App;
