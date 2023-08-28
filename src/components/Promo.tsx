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
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-10">Our new PROMO</h1>
        <div className="flex flex-row">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row">
            <span className="pr-2"></span>
            <span className="">Add to cart</span>
          </button>
          <div className="flex items-center ml-5">
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-md mr-5 text-bold w-18 text-2xl font-bold"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-2xl">{quantity}</span>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-md ml-5 w-15 text-2xl font-bold"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <img className="h-[calc(75vh)] " src="../../src/assets/background3.png" alt="Sunset in the mountains" />
    </div>
  );
}

export default Promo;
