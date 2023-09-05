import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MenuContext } from "../store/menu-context";
import CartItem from "./CartItem";

const CartItemsSummary: React.FC = () => {
  const { menu } = useContext(MenuContext);

  return (
    <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}>
      <div className="h-full flex flex-col items-stretch justify-between">
        <div>
          <h1 className="text-3xl font-bold text-center pt-10 text-white">Your Cart</h1>
          {menu.map((item, index) => (
            <CartItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CartItemsSummary;
