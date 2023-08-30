import { useContext, useState } from "react";
import Item from "../entities/item";
import { MenuContext } from "../store/menu-context";

const CartItem: React.FC<{ key: number; item: Item; index: number }> = ({ key, item, index }) => {
  const { menu, calculateTotalCartPrice, updateCartItemsNo } = useContext(MenuContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex flex-col" key={key}>
      <div className="flex flex-row justify-between items-center px-10 py-3">
        {item.quantity > 0 && (
          <>
            <div className="flex flex-row items-center">
              <img src={item.image} alt="Sunset in the mountains" width="80px" className="rounded" />
              <div className="flex flex-col text-start pl-3 font-bold text-2xl">
                <span>{item.name}</span>
                <span>{item.price} $</span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <button
                className="bg-red-700 text-white px-5 py-2 rounded-md mr-5 text-bold w-18 text-2xl font-bold"
                onClick={() => {
                  updateCartItemsNo();
                  if (item.quantity > 0) {
                    const updatedMenu = [...menu]; // Create a copy of the menu array
                    updatedMenu[index].quantity--; // Update the quantity for the specific item
                    setQuantity(updatedMenu[index].quantity); // Update the local state for the quantity
                    calculateTotalCartPrice(); // Recalculate the total cart price
                  }
                }}
              >
                -
              </button>
              <span className="text-2xl">{item.quantity}</span>
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md ml-5 w-15 text-2xl font-bold"
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
        )}
      </div>
    </div>
  );
};

export default CartItem;
