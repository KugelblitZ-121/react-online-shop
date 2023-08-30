import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../store/menu-context";

const CartModal: React.FC<{ isVisable: boolean; onCartClick: (data: boolean) => void }> = (props) => {
  const [isVisable] = useState(true); // [1]
  const { menu, totalCartPrice, calculateTotalCartPrice, updateCartItemsNo } = useContext(MenuContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    calculateTotalCartPrice();
  }, [menu, calculateTotalCartPrice]);

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
        <div className="bg-custom-gray w-[calc(60vw)] min-h-[calc(50vh)] rounded-md">
          {totalCartPrice === "0.00" ? (
            <div className="flex flex-col justify-center items-center min-h-[calc(50vh)]">
              <img src="../../src/assets/logo.jpg" alt="logo" width="150px" className="mx-auto" />

              <h1 className="text-4xl font-bold text-center pt-5 text-white">Your Cart is empty :( </h1>
            </div>
          ) : (
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
              <div>total : {totalCartPrice}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
