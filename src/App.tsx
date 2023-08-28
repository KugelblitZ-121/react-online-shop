import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Menu from "./components/Menu.js";
import Promo from "./components/Promo.js";

function App() {
  const name: string = "Gh";
  return (
    <>
      <Navbar last={name}></Navbar>
      <Promo />
      <Menu />
    </>
  );
}

export default App;
