import React, { ReactNode, useState } from "react";
import Item from "../entities/item";

const MenuContext = React.createContext<{
  menu: Item[];
  setMenu: (items: Item[]) => void;
  addItem: (item: Item, quantity: number) => void;
  removeItem: (id: number) => void;
  updateCartItemsNo: () => void;
  cartItemsNo: number;
  totalCartPrice: string;
  calculateTotalCartPrice: () => void;
  confirmCheckout: () => void;
}>({
  menu: [],
  setMenu: () => {},
  addItem: () => {},
  removeItem: () => {},
  updateCartItemsNo: () => {},
  cartItemsNo: 0,
  totalCartPrice: "0",
  calculateTotalCartPrice: () => {},
  confirmCheckout: () => {},
});

const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<Item[]>([]);
  const [cartItemsNo, setCartItemsNo] = useState<number>(0);
  const [totalCartPrice, setTotalCartPrice] = useState<string>("0");

  const addItem = (item: Item, quantity: number) => {
    // Check if the item already exists in the cart
    const existingItem = menu.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item exists, update the quantity
      const updatedCartItems = menu.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
      setMenu(updatedCartItems);
    } else {
      // If item doesn't exist, add it to the cart
      setMenu([...menu, { ...item, quantity: item.quantity }]);
    }
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
  const confirmCheckout = () => {
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
        confirmCheckout: confirmCheckout,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
