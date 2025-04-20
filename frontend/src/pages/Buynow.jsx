import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";

const Buynow = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-wrap bg-black text-white px-4 py-2 justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <img
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
            alt="amazon"
            className="w-28 object-contain"
          />
          <span className="text-center text-lg">.in</span>
        </div>

        <div className="flex items-center text-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-semibold">Secure Checkout</h1>
          <IoIosArrowDown />
        </div>

        <div className="flex gap-2 items-center">
          <IoCartOutline size={30} />
          <span className="text-sm sm:text-base">Cart</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row mb-2 bg-gray-100 justify-between px-4 py-4 gap-4">
        {/* Left Section */}
        <div className=" w-full lg:w-3/4 px-4  rounded-md space-y-4">

          {/* Delivery Section */}
          <div className="border-b bg-white p-4  ">
            <div className="flex justify-between items-center mb-2">
              <h1 className="font-bold text-lg">Delivering to John Doe</h1>
              <button className="text-blue-500 text-sm">Change</button>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Address: H.No 33, Street No 2, Delhi, India
            </p>
            <button className="text-blue-500 text-sm">
              + Add delivery instructions
            </button>
          </div>

          {/* Payment Section */}
          <div className="border-b bg-white p-5">
            <h1 className="font-bold mb-4 text-xl">Payment Method</h1>
            <div className="space-y-6 border p-6 rounded-lg">

              {/* Amazon Pay */}
              <div className="border-b pb-4">
                <h2 className="font-semibold text-lg mb-2">Amazon Pay</h2>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="payment" />
                  Use your ₹78 Pay Balance
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    className="py-1 px-2 border rounded text-sm"
                  />
                  <button className="py-1 px-3 border rounded-full text-sm">
                    Apply
                  </button>
                </div>
              </div>

              {/* UPI */}
              <div className="border-b pb-4">
                <h2 className="font-semibold text-lg mb-2">UPI</h2>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="payment" />
                  Pay using UPI ID
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Enter UPI ID"
                    className="py-1 px-2 border rounded text-sm"
                  />
                  <button className="py-1 px-3 border rounded-full text-sm">
                    Apply
                  </button>
                </div>
              </div>

              {/* Card */}
              <div>
                <h2 className="font-semibold text-lg mb-2">Other Methods</h2>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="payment" />
                  Credit or Debit Card
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Enter Card Code"
                    className="py-1 px-2 border rounded text-sm"
                  />
                  <button className="py-1 px-3 border rounded-full text-sm">
                    Apply
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white p-4">
          <h3 className="text-lg font-semibold mb-2">Review Items & Shipping</h3>
          </div>

          {/* Review Section */}
          <div className="bg-white p-4">
           
            <p className="text-sm text-gray-700">
              Need help? Check our help pages or contact us 24x7.
              <br />
              When your order is placed, we'll send you an email confirmation.
              If you choose to pay electronically, you will be redirected to your bank.
              If you use Pay on Delivery (POD), payment is made when the item arrives.
              <br />
              See Amazon.in's Return Policy for more info.
            </p>
           <Link to={"/cart"}> <button className="text-xs text-blue-400">Back to cart</button></Link>
          </div>

          
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full h-fit lg:w-1/4 bg-white p-4 rounded-md">
          <button className="bg-yellow-300 hover:bg-yellow-400 w-full px-4 rounded-full mb-4 py-2 text-sm font-semibold">
            Use this payment method
          </button>
          <div className="border-t text-sm pt-4 space-y-1">
            <p>Items: ₹--</p>
            <p>Delivery: ₹--</p>
            <p>Total: ₹--</p>
            <p>Promotion Applied: ₹--</p>
            <h1 className="font-bold text-base mt-2">Order Total: ₹--</h1>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-700 py-2 text-white cursor-pointer hover:underline">
        <h1>Back to Top</h1>
      </div>
      <div className="bg-gray-800 text-white flex justify-center py-8 text-center items-center gap-8">
      <img
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
            alt="amazon"
            className="w-28 h-20 items-center object-contain"
          />
          <p className="-mt-5 text-sm"> Help</p>
      </div>

      <div className="bg-gray-950 py-5 text-xs text-white">
        <div className="flex gap-4 text-center  justify-center">
            <p>Conditions of Use & Sale</p>
            <p>Privacy Notice</p>
            <p>Interest-Based Ads</p>

        </div>
        <p className="justify-center text-center mb-5">© 1996- newDate(), Amazon.com, Inc. or its affiliates</p>
         
      </div>
    </>
  );
};

export default Buynow;
