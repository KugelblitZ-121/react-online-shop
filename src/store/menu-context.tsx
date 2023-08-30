import React, { useState } from "react";
import Item from "../entities/item";

const MenuContext = React.createContext<{
  menu: Item[];
  setMenu: (items: Item[]) => void;
  addItem: (item: Item) => void;
  updateCartItemsNo: (number: number) => void;
  cartItemsNo: number;
}>({
  menu: [],
  setMenu: () => {},
  addItem: () => {},
  updateCartItemsNo: () => {},
  cartItemsNo: 0,
});

const MenuProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Item[]>([]);
  const [cartItemsNo, setCartItemsNo] = useState<number>(0);
  const addItem = (item: Item) => {
    setMenu((prevMenu) => [...prevMenu, item]);
  };

  const updateCartItemsNo = (number: number) => {
    setCartItemsNo(number);
  };

  return (
    <MenuContext.Provider
      value={{
        menu: menu,
        setMenu: setMenu,
        addItem: addItem,
        cartItemsNo: cartItemsNo,
        updateCartItemsNo: updateCartItemsNo,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
