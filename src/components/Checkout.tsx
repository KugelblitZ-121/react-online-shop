import { useState } from "react";
import { motion } from "framer-motion";

const Checkout = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  // const cardNameRef = useRef<HTMLInputElement>(null);
  // const cardNumberRef = useRef<HTMLInputElement>(null);
  // const cardExpiryRef = useRef<HTMLInputElement>(null);
  // const cardCvcRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setCardName(input);
  };
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    input = input.slice(0, 16); // Limit to 16 characters
    let formattedInput = "";

    for (let i = 0; i < input.length; i += 4) {
      formattedInput += input.slice(i, i + 4);
      if (i + 4 < input.length) {
        formattedInput += " ";
      }
    }
    setCardNumber(formattedInput);
  };
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    input = input.slice(0, 6); // Limit to 6 characters (MMYY)

    if (input.length >= 4) {
      // Split the input into month and year
      const month = input.slice(0, 2);
      const year = input.slice(2, 4);

      // Format as "MM/YY"
      const formattedDate = `${month}/${year}`;
      setCardExpiry(formattedDate);
    } else {
      setCardExpiry(input);
    }
  };
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    input = input.slice(0, 3); // Limit to 16 characters
    setCardCvc(input);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
      className="flex flex-col gap-3 w-full h-full items-center p-5"
    >
      <h1 className="text-3xl font-bold text-center text-white">Checkout</h1>
      <div className="flex flex-col gap-3 lg:w-2/3 h-full items-center justify-center px-5">
        <div className="w-full hidden md:block">
          <div className="w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl">
            <img className="relative object-cover w-full h-full rounded-xl" src="../../src/assets/creditcard.png" />
            <div className="w-full px-8 absolute top-8 text-start">
              <div className="flex justify-between">
                <div className="text-start">
                  <p className="font-light">Name</p>
                  <p className="font-medium">{cardName?.toUpperCase()}</p>
                </div>
                <img className="w-14 h-14" src="../../src/assets/creditcardlogo.png" />
              </div>
              <div className="text-start h-10">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">{cardNumber}</p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">{cardExpiry}</p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">{cardCvc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <label className="relative w-full flex flex-col">
            <span className="font-bold mb-3 text-start">Name</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-grey-500 placeholder-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              type="text"
              name="card_name"
              placeholder="Name on Card"
              value={cardName}
              onChange={handleNameChange}
              maxLength={15}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </label>
          <label className="relative w-full flex flex-col">
            <span className="font-bold mb-3 text-start">Card number</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-grey-500 placeholder-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              maxLength={19} // 16 digits + 3 spaces
              placeholder="XXXX XXXX XXXX XXXX"
              onChange={handleNumberChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </label>

          <label className="relative flex-1 flex flex-col">
            <span className="font-bold mb-3 text-start">Expiry date</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-grey-500 placeholder-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={cardExpiry}
              onChange={handleExpiryChange}
              maxLength={5} // 4 digits + 1 slash
              placeholder="MM/YY"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </label>
          <label className="relative flex-1 flex flex-col">
            <span className="font-bold flex items-center gap-3 mb-3">
              CVC/CVV
              <span className="relative group">
                <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                  Three-digit code on the back of your card
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              type="text"
              name="card_cvc"
              placeholder="&bull;&bull;&bull;"
              value={cardCvc}
              onChange={handleCvcChange}
              maxLength={3}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </label>
        </div>
      </div>
    </motion.form>
  );
};

export default Checkout;
