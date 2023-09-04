import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../store/menu-context";
import CartItemsSummary from "./CartItemsSummary";
import Checkout from "./Checkout";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const { menu, totalCartPrice, calculateTotalCartPrice, confirmCheckout } = useContext(MenuContext);

  const [isVisable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  const handleCheckoutState = () => {
    setIsCheckout((prevState) => !prevState);
  };
  // const confirmPayment = () => {
  //   handleNotification();
  // };

  const confirmPayment = () => {
    setIsSendingRequest(true);
    setTimeout(() => {
      confirmCheckout();
      setShowNotification(true);
      setIsSendingRequest(false);
    }, 2000);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  useEffect(() => {
    calculateTotalCartPrice();
  }, [menu, calculateTotalCartPrice]);

  const handleCart = () => {
    props.onCartClick(!isVisable);
    setIsCheckout(false);
  };
  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal") {
      handleCart();
      setIsCheckout(false);
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
                {isCheckout ? (
                  <div className="flex flex-row">
                    <button
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-28 border border-black rounded flex felx-row ml-5 justify-center"
                      onClick={handleCheckoutState}
                    >
                      <span>Back</span>
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-28 border border-red-700 rounded flex felx-row ml-5 justify-center"
                      onClick={confirmPayment}
                    >
                      <span>
                        {isSendingRequest ? (
                          <svg
                            aria-hidden="true"
                            className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-red-900"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        ) : (
                          "Confirm"
                        )}
                      </span>
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-28 border border-red-700 rounded flex felx-row ml-5 justify-center"
                    onClick={handleCheckoutState}
                  >
                    <span>Checkout</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
