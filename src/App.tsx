import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Menu from "./components/Menu.js";
import Promo from "./components/Promo.js";
import CartModal from "./components/CartModal.js";
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
      <AnimatePresence>
        <CartModal isVisable={isVisable} onCartClick={onCartClick} />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
