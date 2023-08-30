import { useState } from "react";
import Item from "../entities/item";

const MenuItem: React.FC<{ item: Item }> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };
  const handleAddToCart = () => {
    item.quantity = quantity;

    console.log(item.quantity);
    setQuantity(0);
  };
  return (
    <div className="rounded overflow-hidden">
      <div className="flex flex-col items-center">
        <img src={item.image} alt="Sunset in the mountains" width="80%" className="rounded" />
        <div className="">
          <div className="text-center font-bold text-xl mb-2 mt-2 flex flex-row justify-between">
            <span className="text-2xl">{item.name}</span>
            <span className="text-2xl">{item.price} $</span>
          </div>
          <div className="flex flex-row">
            <button
              value={quantity}
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row ${
                quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={quantity === 0}
              onClick={handleAddToCart}
            >
              <span>Add to cart</span>
            </button>
            <div className="flex items-center ml-5">
              <button
                value={quantity}
                className="bg-red-700 text-white px-5 py-2 rounded-md mr-5 text-bold w-18 text-2xl font-bold"
                onClick={() => {
                  handleDecrement();
                }}
              >
                -
              </button>
              <span className="text-2xl">{quantity}</span>
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md ml-5 w-15 text-2xl font-bold"
                onClick={() => {
                  handleIncrement();
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
