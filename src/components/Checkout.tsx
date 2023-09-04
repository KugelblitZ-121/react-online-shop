const Checkout = () => {
  return (
    <form className="flex flex-col gap-3 w-full h-full items-center p-5">
      <h1 className="text-4xl font-bold text-center text-white">Checkout</h1>
      <div className="flex flex-col gap-3 w-2/3 h-full items-center p-5">
        <div className="w-full">
          <div className="w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl">
            <img className="relative object-cover w-full h-full rounded-xl" src="../../src/assets/creditcard.png" />
            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="text-start">
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">Karthik P</p>
                </div>
                <img className="w-14 h-14" src="../../src/assets/creditcardlogo.png" />
              </div>
              <div className="text-start">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">4642 3489 9867 7632</p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light text-xs text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">03/25</p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <label className="relative w-full flex flex-col">
            <span className="font-bold mb-3 text-start">Name</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-grey-500 placeholder-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              type="text"
              name="card_name"
              placeholder="Name on Card"
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
              name="card_number"
              placeholder="0000 0000 0000"
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
              name="expire_date"
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
    </form>
  );
};

export default Checkout;
