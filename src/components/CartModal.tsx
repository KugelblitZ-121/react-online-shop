import { useState } from "react";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const [isVisable] = useState(true); // [1]

  const handleCart = () => {
    props.onCartClick(!isVisable);
  };
  if (!props.isVisable) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center">
      <div className="flex flex-col">
        <span className="place-self-end text-4xl pb-2 cursor-pointer" onClick={handleCart}>
          X
        </span>
        <div className="bg-white w-[calc(60vw)] h-[calc(50vh)] rounded-md">
          <h1 className="text-4xl font-bold text-center pt-10 text-black">Your Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
