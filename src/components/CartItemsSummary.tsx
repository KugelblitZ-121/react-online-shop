import React, { useContext } from "react";
import { MenuContext } from "../store/menu-context";
import CartItem from "./CartItem";

const CartItemsSummary: React.FC = () => {
  const { menu } = useContext(MenuContext);

  return (
    <div>
      <div className="h-full flex flex-col items-stretch justify-between">
        <div>
          <h1 className="text-4xl font-bold text-center pt-10 text-white">Your Cart</h1>
          {menu.map((item, index) => (
            <CartItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItemsSummary;
