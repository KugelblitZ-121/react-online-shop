import { useState } from "react";
//import { BsFillCartCheckFill } from "react-icons/bs";

function Promo() {
  const [quantity, setQuantity] = useState(1); // Initial quantity

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="bg-[url('../../src/assets/background.png')] bg-cover bg-center w-screen h-[calc(65vh)] grid grid-cols-2 justify-items-end content-end">
      <div className="flex flex-row items-center h-72">
        <div className="">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row">
            <span className="pr-2"></span>
            <span className="">Add to cart</span>
          </button>
        </div>
        <div className="ml-2">
          <div className="flex items-center">
            <button className="bg-red-700 text-white px-2 py-1 rounded-md mr-2" onClick={handleDecrement}>
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button className="bg-red-700 text-white px-2 py-1 rounded-md ml-2" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
