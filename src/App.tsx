import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Menu from "./components/Menu.js";
import Promo from "./components/Promo.js";
import CartModal from "./components/CartModal.js";
import { useState } from "react";
import Footer from "./components/Footer.js";

const App = () => {
  const [isVisable, setIsVisable] = useState(false);

  const onCartClick = (data: boolean) => {
    setIsVisable(data);
  };
  return (
    <>
      <Navbar onCartClick={onCartClick} />
      <Promo />
      <Menu />
      <CartModal isVisable={isVisable} onCartClick={onCartClick} />
      <Footer />
    </>
  );
};

export default App;
