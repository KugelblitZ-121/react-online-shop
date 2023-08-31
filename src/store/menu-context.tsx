import React, { useState } from "react";
import Item from "../entities/item";

const MenuContext = React.createContext<{
  menu: Item[];
  setMenu: (items: Item[]) => void;
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  updateCartItemsNo: () => void;
  cartItemsNo: number;
  totalCartPrice: string;
  calculateTotalCartPrice: () => void;
  handleCheckout: () => void;
}>({
  menu: [],
  setMenu: () => {},
  addItem: () => {},
  removeItem: () => {},
  updateCartItemsNo: () => {},
  cartItemsNo: 0,
  totalCartPrice: "0",
  calculateTotalCartPrice: () => {},
  handleCheckout: () => {},
});

const MenuProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Item[]>([]);
  const [cartItemsNo, setCartItemsNo] = useState<number>(0);
  const [totalCartPrice, setTotalCartPrice] = useState<string>("0");

  const addItem = (item: Item) => {
    setMenu((prevMenu) => [...prevMenu, item]);
  };
  const removeItem = (id: number) => {
    const updatedCartItems = menu.filter((item) => item.id !== id);
    setMenu(updatedCartItems);
  };
  const updateCartItemsNo = () => {
    setCartItemsNo(menu.length);
  };
  const calculateTotalCartPrice = () => {
    let total = 0;
    menu.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCartPrice(total.toFixed(2));
  };
  const handleCheckout = () => {
    setMenu([]);
  };

  return (
    <MenuContext.Provider
      value={{
        menu: menu,
        setMenu: setMenu,
        addItem: addItem,
        removeItem: removeItem,
        cartItemsNo: cartItemsNo,
        updateCartItemsNo: updateCartItemsNo,
        totalCartPrice: totalCartPrice,
        calculateTotalCartPrice: calculateTotalCartPrice,
        handleCheckout: handleCheckout,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
