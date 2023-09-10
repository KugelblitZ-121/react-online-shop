import { useContext, useState } from "react";
import Item from "../entities/item";
import { MenuContext } from "../store/menu-context";

const CartItem: React.FC<{ item: Item; index: number }> = ({ item, index }) => {
  const { menu, calculateTotalCartPrice, removeItem } = useContext(MenuContext);
  const [, setQuantity] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center lg:px-10 px-2 py-3">
        <>
          <div className="flex flex-row items-center">
            <img src={item.image} alt="Sunset in the mountains" width="80px" className="rounded" />
            <div className="flex flex-col text-start pl-3 font-bold text-xl lg:text-2xl">
              <span>{item.name}</span>
              <span>{item.price} $</span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-md mr-5 text-bold text-2xl font-bold"
              onClick={() => {
                if (item.quantity > 0) {
                  const updatedMenu = [...menu]; // Create a copy of the menu array
                  updatedMenu[index].quantity--; // Update the quantity for the specific item
                  setQuantity(updatedMenu[index].quantity); // Update the local state for the quantity
                  calculateTotalCartPrice(); // Recalculate the total cart price
                }
                if (item.quantity === 0) {
                  removeItem(item.id);
                }
              }}
            >
              -
            </button>
            <span className="text-2xl">{item.quantity}</span>
            <button
              className="bg-red-700 text-white px-3 py-2 rounded-md ml-5 text-2xl font-bold"
              onClick={() => {
                const updatedMenu = [...menu]; // Create a copy of the menu array
                updatedMenu[index].quantity++; // Update the quantity for the specific item
                setQuantity(updatedMenu[index].quantity); // Update the local state for the quantity
                calculateTotalCartPrice(); // Recalculate the total cart price
              }}
            >
              +
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default CartItem;
