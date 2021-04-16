import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import "./App.scss";
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <MobileNavBar />
    </div>
  );
}

export default App;
