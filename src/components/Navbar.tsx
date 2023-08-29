import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="p-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row w-full items-center justify-between">
          <img src="../../src/assets/logo.jpg" alt="logo" width="80px" />
          <div className="flex flex-row">
            <button className="text-2xl font-bold py-2 px-5 border-2 border-red-800 rounded-lg bg-red-500 hover:bg-red-700 flex flex-row items-center">
              <span className="pr-4 text-3xl">
                <BsFillCartCheckFill />
              </span>
              <span className="">Cart</span>
            </button>
            <button className="text-2xl font-bold ml-5">+12 5555</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
