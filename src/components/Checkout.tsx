import React, { useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { MenuContext } from "../store/menu-context";

const Checkout: React.FC<{ onSendNotification: (notificationIsSent: boolean) => void }> = (props) => {
  const { confirmCheckout } = useContext(MenuContext);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  //const [showNotification, setShowNotification] = useState(false);

  const cardNameRef = useRef<HTMLInputElement>(null);
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const cardExpiryRef = useRef<HTMLInputElement>(null);
  const cardCvcRef = useRef<HTMLInputElement>(null);

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

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const cardName = cardNameRef.current?.value;
    const cardNumber = cardNumberRef.current?.value;
    const cardExpiry = cardExpiryRef.current?.value;
    const cardCvc = cardCvcRef.current?.value;

    if (cardName === "") {
      cardNameRef.current?.focus();
      return;
    } else if (!cardNumber || cardNumber.length < 19) {
      cardNumberRef.current?.focus();
      return;
    } else if (
      !cardExpiry ||
      cardExpiry.length < 5 ||
      parseInt(cardExpiry?.slice(0, 2)) > 12 ||
      parseInt(cardExpiry?.slice(3, 5)) < 23
    ) {
      cardExpiryRef.current?.focus();
      return;
    } else if (!cardCvc || cardCvc.length < 3) {
      cardCvcRef.current?.focus();
      return;
    } else {
      setIsSendingRequest(true);

      setTimeout(() => {
        confirmCheckout();
        setIsSendingRequest(false);
        props.onSendNotification(true);
      }, 2000);

      setTimeout(() => {
        props.onSendNotification(false);
      }, 3500);
    }
  };

  return (
    <motion.form
      onSubmit={submitForm}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
      className="flex flex-col gap-3 w-full h-full items-center p-5"
    >
      {/* <h1 className="text-3xl font-bold text-center text-white">Checkout</h1> */}
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
              ref={cardNameRef}
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
              ref={cardNumberRef}
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
              ref={cardExpiryRef}
              onChange={handleExpiryChange}
              maxLength={5} // 4 digits + 1 slash
              min={0}
              max={12}
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
              ref={cardCvcRef}
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
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-28 border border-red-700 rounded flex felx-row ml-5 justify-center"
        //onClick={confirmPayment}
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
    </motion.form>
  );
};

export default Checkout;
