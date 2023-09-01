import { useState, useContext } from "react";
import Item from "../entities/item";
import { MenuContext } from "../store/menu-context";

const MenuItem: React.FC<{ item: Item }> = ({ item }) => {
  const { addItem, updateCartItemsNo } = useContext(MenuContext);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };
  const handleAddToCart = (item: Item) => {
    item.quantity = quantity;
    addItem(item, quantity);
    updateCartItemsNo();
    setQuantity(0);
  };
  return (
    <div className="rounded overflow-hidden">
      <div className="flex flex-col items-center">
        <img src={item.image} alt="Sunset in the mountains" width="80%" className="rounded" />
        <div className="">
          <div className="text-center font-bold text-md lg:text-xl mb-2 mt-2 flex flex-row justify-between">
            <span>{item.name}</span>
            <span>{item.price} $</span>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="flex items-center justify-between">
              <button
                className="bg-red-700 text-white px-5 py-2 rounded-md mr-5 text-bold  text-2xl font-bold"
                onClick={() => {
                  handleDecrement();
                }}
              >
                -
              </button>
              <span className="text-2xl">{quantity}</span>
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md ml-5  text-2xl font-bold"
                onClick={() => {
                  handleIncrement();
                }}
              >
                +
              </button>
            </div>
            <button
              value={quantity}
              className={`bg-red-500 lg:hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row justify-center xl:ml-2 mt-2 xl:mt-0 ${
                quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={quantity === 0}
              onClick={() => {
                handleAddToCart(item);
              }}
            >
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
