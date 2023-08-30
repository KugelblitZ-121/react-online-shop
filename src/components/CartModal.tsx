import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../store/menu-context";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const [isVisable] = useState(true); // [1]
  const { menu, totalCartPrice, calculateTotalCartPrice, updateCartItemsNo } = useContext(MenuContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantity, setQuantity] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false); // [1

  useEffect(() => {
    calculateTotalCartPrice();
  }, [menu, calculateTotalCartPrice]);

  const handleCart = () => {
    props.onCartClick(!isVisable);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
    setTimeout(() => {
      setIsCheckout(false);
    }, 3000);
  };

  if (!props.isVisable) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center">
      <div className="flex flex-col">
        {isCheckout && (
          <div className="flex flex-row alert alert-success text-xl bg-green-500 rounded-lg py-2 px-2 transition transition-opacity ease-in duration-700 opacity-100 hover:opacity-0">
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
        )}
        <span className="place-self-end text-4xl pb-2 cursor-pointer" onClick={handleCart}>
          X
        </span>
        <div className="bg-custom-gray w-[calc(60vw)] h-[calc(60vh)] rounded-md">
          {totalCartPrice === "0.00" ? (
            <div className="flex flex-col justify-center items-center h-[calc(50vh)]">
              <img src="../../src/assets/logo.jpg" alt="logo" width="150px" className="mx-auto" />

              <h1 className="text-4xl font-bold text-center pt-5 text-white">Your Cart is empty :( </h1>
            </div>
          ) : (
            <div className="h-full flex flex-col items-stretch justify-between">
              <div>
                <h1 className="text-4xl font-bold text-center pt-10 text-white">Your Cart</h1>
                {menu.map((item, index) => (
                  <div className="flex flex-col" key={index}>
                    <div className="flex flex-row justify-between items-center px-10 py-3" key={index}>
                      {item.quantity > 0 && (
                        <>
                          <div className="flex flex-row items-center">
                            <img src={item.image} alt="Sunset in the mountains" width="80px" className="rounded" />
                            <div className="flex flex-col text-start pl-3 font-bold text-2xl">
                              <span>{item.name}</span>
                              <span>{item.price} $</span>
                            </div>
                          </div>

                          <div className="flex flex-row items-center">
                            <button
                              className="bg-red-700 text-white px-5 py-2 rounded-md mr-5 text-bold w-18 text-2xl font-bold"
                              onClick={() => {
                                updateCartItemsNo();
                                if (item.quantity > 0) {
                                  const updatedMenu = [...menu]; // Create a copy of the menu array
                                  updatedMenu[index].quantity--; // Update the quantity for the specific item
                                  setQuantity(updatedMenu[index].quantity); // Update the local state for the quantity
                                  calculateTotalCartPrice(); // Recalculate the total cart price
                                }
                              }}
                            >
                              -
                            </button>
                            <span className="text-2xl">{item.quantity}</span>
                            <button
                              className="bg-red-700 text-white px-4 py-2 rounded-md ml-5 w-15 text-2xl font-bold"
                              onClick={() => {
                                const updatedMenu = [...menu]; // Create a copy of the menu array
                                updatedMenu[index].quantity++; // Update the quantity for the specific item
                                setQuantity(updatedMenu[index].quantity); // Update the local state for the quantity
                                calculateTotalCartPrice(); // Recalculate the total cart price
                              }}
                            >
                              +
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="self-end flex flex-rwo items-center p-5">
                <h1 className="text-3xl font-bold text-center text-white">Total: {totalCartPrice} $</h1>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded flex felx-row ml-5"
                  onClick={handleCheckout}
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
