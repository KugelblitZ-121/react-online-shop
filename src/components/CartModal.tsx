import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../store/menu-context";
import CartItemsSummary from "./CartItemsSummary";
import Checkout from "./Checkout";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const { menu, totalCartPrice, calculateTotalCartPrice, confirmCheckout } = useContext(MenuContext);

  //const [isCheckout, setIsCheckout] = useState(false);
  const [isVisable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout((prevState) => !prevState);
  };

  const handleNotification = () => {
    setTimeout(() => {
      confirmCheckout();
      setShowNotification(true);
    }, 1500);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  useEffect(() => {
    calculateTotalCartPrice();
  }, [menu, calculateTotalCartPrice]);

  const handleCart = () => {
    props.onCartClick(!isVisable);
  };
  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal") {
      handleCart();
    }
  };

  if (!props.isVisable) {
    return null;
  }

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="flex flex-col">
        <div
          className={`flex flex-row alert alert-success text-xl bg-green-500 rounded-lg px-2 py-1 ${
            showNotification ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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
        <div className="bg-custom-gray md:w-[calc(70vw)] w-[calc(90vw)] h-[calc(65vh)] rounded-md overflow-y-auto">
          {totalCartPrice === "0.00" ? (
            <div className="flex flex-col justify-center items-strech h-full">
              <img src="../../src/assets/logo.jpg" alt="logo" width="150px" className="mx-auto" />

              <h1 className="lg:text-4xl text-2xl font-bold text-center pt-5 text-white">Your Cart is empty :( </h1>
            </div>
          ) : (
            <div className="h-full flex flex-col items-stretch justify-between">
              {isCheckout ? <Checkout /> : <CartItemsSummary />}

              <div className="flex flex-row self-center lg:self-end items-center p-5">
                <h1 className="text-3xl font-bold text-center text-white">Total: {totalCartPrice} $</h1>
                {isCheckout && (
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-28 border border-black rounded flex felx-row ml-5 justify-center"
                    onClick={handleCheckout}
                  >
                    <span>Back</span>
                  </button>
                )}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-28 border border-red-700 rounded flex felx-row ml-5 justify-center"
                  onClick={isCheckout ? handleNotification : handleCheckout}
                >
                  <span>{isCheckout ? "Confirm" : "Checkout"}</span>
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
