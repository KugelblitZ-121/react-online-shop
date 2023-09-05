import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { MenuContext } from "../store/menu-context";
import CartItemsSummary from "./CartItemsSummary";
import Checkout from "./Checkout";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const { menu, totalCartPrice, calculateTotalCartPrice } = useContext(MenuContext);

  const [isVisable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckoutState = () => {
    setIsCheckout((prevState) => !prevState);
  };

  useEffect(() => {
    calculateTotalCartPrice();
  }, [menu, calculateTotalCartPrice]);

  const handleCart = () => {
    props.onCartClick(!isVisable);
    setIsCheckout(false);
    setShowNotification(false);
  };
  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal") {
      handleCart();
      setIsCheckout(false);
    }
  };
  const handleSendNotification = (notificationIsSent: boolean) => {
    setShowNotification(notificationIsSent);
  };

  if (!props.isVisable) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
      exit={{ opacity: 0, y: 30 }}
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-end xs:items-center"
      onClick={handleClose}
    >
      <div className="flex flex-col mb-7">
        <motion.div
          className={`flex flex-row alert alert-success text-xl bg-green-500 rounded-lg px-2 py-1`}
          initial={{ opacity: 0, y: 0 }}
          animate={showNotification ? { opacity: 1, y: 18 } : { opacity: 0, y: 0 }}
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
        </motion.div>
        <div className="pb-5 mt-6 flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row ml-5 self-end"
            onClick={handleCart}
          >
            <span>Close</span>
          </button>
        </div>
        <div className="bg-custom-gray md:w-[calc(70vw)] w-[calc(90vw)] h-[calc(65vh)] md:h-[calc(70vh)] rounded-md overflow-y-auto">
          {totalCartPrice === "0.00" ? (
            <div className="flex flex-col justify-center items-strech h-full">
              <img src="../../src/assets/logo.jpg" alt="logo" width="150px" className="mx-auto" />

              <h1 className="lg:text-4xl text-2xl font-bold text-center pt-5 text-white">Your Cart is empty :( </h1>
            </div>
          ) : (
            <div className="h-full flex flex-col items-stretch justify-between">
              {isCheckout ? <Checkout onSendNotification={handleSendNotification} /> : <CartItemsSummary />}

              <div className="flex flex-col lg:flex-row self-center lg:self-end items-center p-3">
                <h1 className="text-3xl font-bold text-center text-white">Total: {totalCartPrice} $</h1>
                {isCheckout ? (
                  <div className="flex flex-row">
                    <motion.button
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-28 border border-black rounded flex felx-row ml-5 justify-center mt-2 lg:mt-0"
                      onClick={handleCheckoutState}
                    >
                      <span>Back</span>
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-28 border border-red-700 rounded flex felx-row ml-5 justify-center mt-2 lg:mt-0"
                    onClick={handleCheckoutState}
                  >
                    <span>Checkout</span>
                  </motion.button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CartModal;
