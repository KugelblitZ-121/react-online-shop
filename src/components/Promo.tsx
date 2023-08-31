import { useContext, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MenuContext } from "../store/menu-context";
import Item from "../entities/item";
const Promo: React.FC = () => {
  const { addItem } = useContext(MenuContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    const promoItem = new Item(8, "Promo", 14.99, "../../src/assets/promoitem.jpg", "Promo", quantity);
    addItem(promoItem, quantity);
    setQuantity(0);
  };
  return (
    <div className="grid grid-cols-2 md:bg-[url('../../src/assets/background3.png')] bg-cover bg-center h-[calc(80vh)]">
      <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1 ml-20">
        <h1 className="text-6xl font-bold mb-10">Our new PROMO</h1>
        <div className="flex flex-row">
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row items-center ${
              quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={quantity === 0}
            onClick={handleAddToCart}
          >
            <span className="pr-2 text-xl lg:text-3xl">
              <BsFillCartPlusFill />
            </span>
            <span className="flex justify-center items-center text-md lg:text-xl">Add to Cart</span>
          </button>
          <div className="flex items-center ml-5">
            <button
              className={`bg-red-700 text-white px-5 py-2 rounded-md mr-5 text-bold text-2xl font-bold ${
                quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-2xl">{quantity}</span>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-md ml-5 text-2xl font-bold"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {/* <div>
        <img className="h-[calc(70vh)] " src="../../src/assets/background3.png" alt="New offer" />
      </div> */}
    </div>
  );
};

export default Promo;
