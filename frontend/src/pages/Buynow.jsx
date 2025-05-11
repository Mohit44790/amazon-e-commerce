import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";



const Buynow = () => {
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showChangeAddress, setShowChangeAdress]=useState(false)
  const  {user}  = useSelector((state) => state.auth);
  const { addresses } = useSelector((state) => state.address);
  const navigate = useNavigate();
  
  const defaultAddress = addresses?.[0];
  
 const { items } = useSelector((state) => state.cart || {});
  const cartItems = items || [];
  console.log("Cart Items Array:", cartItems, Array.isArray(cartItems));


  const calculateTotalPrice = () =>
    cartItems.reduce(
      (total, item) =>
        total + (item.price ? item.price * (item.quantity || 1) : 0),
      0
    );
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
              <h1 className="font-bold text-lg"> Delivering to {defaultAddress?.fullName || "No Address Found"}</h1>
              <button className="text-blue-500 text-sm" onClick={()=>setShowChangeAdress(true)}>Change</button>
            </div>
            <p className="text-sm text-gray-600 mb-2">
  Address: {defaultAddress
    ? `${defaultAddress.addressLine}, ${defaultAddress.landmark}, ${defaultAddress.city}, ${defaultAddress.state} - ${defaultAddress.pincode}`
    : "Please add an address"}
</p>
<p className="text-sm text-gray-600">
  Phone: {defaultAddress?.phoneNumber}
</p>
            <button className="text-blue-500 text-sm"
  onClick={() => setShowInstructionsModal(true)}>
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
          <button onClick={() => navigate("/order")} className="bg-yellow-300 hover:bg-yellow-400 w-full px-4 rounded-full mb-4 py-2 text-sm font-semibold">
            Use this payment method
          </button>
          <div className="border-t text-sm pt-4 space-y-1">
            <p>Items: ₹{calculateTotalPrice().toFixed(2)} </p>
            <p>Delivery: ₹ free</p>
            <p>Total: ₹{calculateTotalPrice().toFixed(2)}</p>
            <p>Promotion Applied: ₹--</p>
            <h1 className="font-bold text-base mt-2">Order Total: ₹ {calculateTotalPrice().toFixed(2)}</h1>
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
      
          {/* + Add delivery instructions */}
          {showInstructionsModal && (
  <div className="fixed inset-0  bg-black bg-opacity-50 flex  items-center justify-center z-50">
    <div className="bg-white p-6 relative rounded-md w-full max-w-fit shadow-lg">
      <h2 className="text-lg font-semibold bg-gray-200   mb-4">Add Delivery Instructions</h2>
               <div>
                <p>{user.name}</p>
                <p>{`${defaultAddress.addressLine}, ${defaultAddress.landmark}, ${defaultAddress.city}, ${defaultAddress.state} - ${defaultAddress.pincode}`}</p>
                <div className="flex gap-4 ">
                  <button className="border p-1 rounded-lg">House</button>
                  <button className="border p-1 rounded-lg">Apartment</button>
                  <button className="border p-1 rounded-lg">Business</button>
                  <button className="border p-1 rounded-lg">other</button>
                </div>
                <p>Independent house , villa ,or builder floor (6 AM-11 PM Delivery)</p>
                <div>
                  <h1 className="py-1 border bg-slate-200 px-2">Can you receive deliveries at this address on weekends ?</h1>
                </div>
               </div>
      <textarea
        rows="4"
        className="w-full p-2 border rounded text-sm"
        placeholder="Enter delivery instructions..."
      ></textarea>
      <div className="flex justify-end mt-4 gap-2">
        <button
          className="px-4 py-1 absolute top-0 right-0 "
          onClick={() => setShowInstructionsModal(false)}
        >
          X
        </button>
        <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  </div>
)}

{/* address chnage  */}

{showChangeAddress && (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white p-6 relative rounded-md w-full max-w-fit shadow-lg">

    <h1>change address </h1>
    <button onClick={()=>setShowChangeAdress(false)} className="right-1 top-0  absolute">X</button>
</div>
  </div>
)}
    </>
    
  );
};

export default Buynow;
