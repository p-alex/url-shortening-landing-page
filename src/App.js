import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import Header from "./components/Header/Header";
import "./App.scss";
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <MobileNavBar />
      <Header />
    </div>
  );
}

export default App;
