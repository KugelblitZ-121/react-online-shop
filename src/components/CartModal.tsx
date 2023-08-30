import { useContext, useState } from "react";
import { MenuContext } from "../store/menu-context";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const [isVisable] = useState(true); // [1]
  const { menu } = useContext(MenuContext);

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
        <div className="bg-red-500 w-[calc(60vw)] h-[calc(50vh)] rounded-md">
          <h1 className="text-4xl font-bold text-center pt-10 text-black">Your Cart</h1>
          {menu.map((item, index) => (
            <div className="flex flex-row justify-between items-center" key={index}>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <span className="text-xl">{item.name}</span>
                  <span className="text-xl">{item.price} $</span>
                </div>
              </div>
              <div className="flex flex-row">
                <button className="bg-red-700 text-white px-5 py-2 rounded-md mr-5 text-bold w-18 text-2xl font-bold">
                  -
                </button>
                <span className="text-2xl">{item.quantity}</span>
                <button className="bg-red-700 text-white px-4 py-2 rounded-md ml-5 w-15 text-2xl font-bold">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
