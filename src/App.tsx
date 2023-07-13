import LandisGyr from "./assets/LandisGyr.svg";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div>
        <a href="https://www.landisgyr.com.br" target="_blank">
          <img src={LandisGyr} className="logo" alt="Vite logo" />
        </a>
      </div>
      <Menu />
    </>
  );
}

export default App;
