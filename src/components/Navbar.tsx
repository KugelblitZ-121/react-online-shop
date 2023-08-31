import { useContext, useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MenuContext } from "../store/menu-context";

const Navbar: React.FC<{ onCartClick: (data: boolean) => void }> = (props) => {
  const { cartItemsNo, updateCartItemsNo } = useContext(MenuContext);
  const [isVisable] = useState(false); // [1]

  useEffect(() => {
    updateCartItemsNo();
  }, [cartItemsNo, updateCartItemsNo]);

  const handleCart = () => {
    props.onCartClick(!isVisable);
  };
  return (
    <nav className="px-5 fixed w-full bg-custom-gray">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row w-full items-center justify-between">
          <img src="../../src/assets/logo.jpg" alt="logo" width="80px" />
          <div className="flex flex-row">
            <button
              className="text-2xl font-bold py-2 px-5 border-2 border-red-800 rounded-lg bg-red-500 hover:bg-red-700 flex flex-row items-center"
              onClick={handleCart}
            >
              <span className="pr-4 text-3xl">
                <BsFillCartCheckFill />
              </span>
              {cartItemsNo !== 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-0 right-0 animate-pulse"
                  fill="pink"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  transform="translate(-15, 5)"
                >
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                </svg>
              )}
              <span className="">Cart {cartItemsNo}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
