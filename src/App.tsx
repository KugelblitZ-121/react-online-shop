import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  const name: string = "Gh";
  return (
    <>
      <Navbar last={name}></Navbar>
    </>
  );
}

export default App;
