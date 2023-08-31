import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../store/menu-context";
import CartItem from "./CartItem";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const [isVisable] = useState(true); // [1]
  const { menu, totalCartPrice, calculateTotalCartPrice, handleCheckout } = useContext(MenuContext);
  const [isShowNotification, setIsShowNotification] = useState(false); // [1

  useEffect(() => {
    calculateTotalCartPrice();
  }, [menu, calculateTotalCartPrice]);

  const handleCart = () => {
    props.onCartClick(!isVisable);
  };

  const handleNotification = () => {
    handleCheckout();
    setIsShowNotification(true);
    const timer = setTimeout(() => {
      setIsShowNotification(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  };

  if (!props.isVisable) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center">
      <div className="flex flex-col">
        <div
          className={`flex flex-row alert alert-success text-xl bg-green-500 rounded-lg px-2 py-1 ${
            isShowNotification ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } transition duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="pl-5">Your order has been confirmed!</span>
        </div>
        <div className="pb-5 mt-6 flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row ml-5 self-end"
            onClick={handleCart}
          >
            <span>Close</span>
          </button>
        </div>
        <div className="bg-custom-gray w-[calc(60vw)] h-[calc(60vh)] rounded-md">
          {totalCartPrice === "0.00" ? (
            <div className="flex flex-col justify-center items-strech h-full">
              <img src="../../src/assets/logo.jpg" alt="logo" width="150px" className="mx-auto" />

              <h1 className="text-4xl font-bold text-center pt-5 text-white">Your Cart is empty :( </h1>
            </div>
          ) : (
            <div className="h-full flex flex-col items-stretch justify-between">
              <div>
                <h1 className="text-4xl font-bold text-center pt-10 text-white">Your Cart</h1>
                {menu.map((item, index) => (
                  <CartItem key={item.id} item={item} index={index} />
                ))}
              </div>
              <div className="self-end flex flex-rwo items-center p-5">
                <h1 className="text-3xl font-bold text-center text-white">Total: {totalCartPrice} $</h1>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row ml-5"
                  onClick={handleNotification}
                >
                  <span>Checkout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
