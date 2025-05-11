import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { createOrder } from "../redux/slice/orderSlice";
import { clearCart } from '../redux/slice/cartSlice';
import { MdPhotoSizeSelectLarge } from "react-icons/md";

const CheckoutPage = () => {
  const { items: cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const { addresses } = useSelector((state) => state.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const defaultAddress = addresses?.[0];
  const DELIVERY_CHARGE = 59;
  const COD_FEE = 7;
  const PROMOTION_DISCOUNT = 59;
  const SAVINGS = 5;
  const SAVINGS_PERCENT = 8;

  const calculateSubtotal = () =>
    cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );

  const calculateTotalPrice = () => {
    const subtotal = calculateSubtotal();
    return subtotal + DELIVERY_CHARGE + COD_FEE - PROMOTION_DISCOUNT;
  };

  const handlePlaceOrder = () => {
    if (!user || cartItems.length === 0) {
      toast.error("User not logged in or cart is empty");
      return;
    }

    const orderItems = cartItems.map((item) => ({
      product: item.product?._id || item._id,
      quantity: item.quantity || 1,
      price: item.price,
      name: item.name,
      images: item.images || [],
      colors: item.colors || "default",
      // MdPhotoSizeSelectLarge: item.size || "default",
      sizes: item.sizes || "default",
    }));

    const shippingAddress = {
      fullName: defaultAddress?.fullName || user?.name || "Guest User",
      phoneNumber: defaultAddress?.phoneNumber || "N/A",
      addressLine: defaultAddress?.addressLine || "N/A",
      city: defaultAddress?.city || "City",
      state: defaultAddress?.state || "State",
      pincode: defaultAddress?.pincode || "000000",
      landmark: defaultAddress?.landmark || "",
    };

    const totalAmount = calculateTotalPrice();

    dispatch(
      createOrder({
        orderItems,
        shippingAddress,
        paymentMethod,
        totalAmount,
      })
      
    )
      .unwrap()
      .then((createdOrder) => {
        dispatch(clearCart());
        toast.success("Order placed successfully!");
        navigate(`/delivery-status/${createdOrder._id}`);
      })
      .catch((err) => {
        console.error("Order failed", err);
        const errorMessage =
          err?.data?.message ||
          err?.message ||
          "Something went wrong while placing the order.";
        toast.error(errorMessage);
      });
      console.log("Sending order:", {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalAmount,
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-4xl text-center font-bold mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          {/* 1. Delivery Address */}
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-2">1. Delivery address</h2>
            {defaultAddress ? (
  <>
    <p className="mb-1">{defaultAddress.fullName}</p>
    <p className="mb-1">
      {defaultAddress.addressLine}, {defaultAddress.landmark}
    </p>
    <p className="mb-1">
      {defaultAddress.city}, {defaultAddress.state} - {defaultAddress.pincode}
    </p>
    <p className="mb-1">Phone: {defaultAddress.phoneNumber}</p>
  </>
) : (
  <p className="text-red-500">No delivery address found. Please add one.</p>
)}

            <button className="text-blue-600 hover:underline mt-2">Change</button>
          </div>

          {/* 2. Payment Method */}
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-2">2. Payment method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border p-2 rounded mb-2"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
            </select>
            <div className="mt-2">
              <label className="text-sm">Add a gift card or promotion code:</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="border p-2 rounded flex-1"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-sm font-semibold">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* 3. Offers */}
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-2">3. Offers</h2>
            <p className="text-gray-600 text-sm">No available offers</p>
          </div>

          {/* 4. Review Items */}
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-4">4. Review items and delivery</h2>
            <p className="text-green-600 font-semibold mb-2">Arriving {new Date(Date.now()).toLocaleDateString("en-IN", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      
                    })}{" "}</p>
            <div className="flex flex-wrap gap-4">
              {cartItems.map((item) => (
                <div key={item._id} className="border p-2 w-64">
                  <img
                    src={item.images || "/placeholder.jpg"}
                    alt={item.name}
                    className="w-full h-24  object-contain"
                  />
                  <h3 className="font-medium">{item.name}</h3>
                  <h3 className="font-semibold text-sm">{item.description.substring(0,35)}...</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(Date.now() + 2 * 86400000).toLocaleDateString("en-IN", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}{" "}
                    - <span className="line-through">₹59 per unit</span>{" "}
                    <span className="text-green-600 font-semibold">
                      FREE Two-day delivery
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-80 border p-4 rounded shadow-sm h-fit">
          <button
            onClick={handlePlaceOrder}
            className="bg-yellow-500 hover:bg-yellow-600 w-full py-2 rounded font-semibold text-sm mb-4"
          >
            Place your order
          </button>
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <ul className="text-sm space-y-1 mb-4">
            <li className="flex justify-between">
              <span>Items:</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>Delivery:</span>
              <span>₹{DELIVERY_CHARGE.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>Cash on Delivery fee:</span>
              <span>₹{COD_FEE.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>Promotion Applied:</span>
              <span>-₹{PROMOTION_DISCOUNT.toFixed(2)}</span>
            </li>
          </ul>
          <h3 className="text-lg font-bold text-red-600 mb-2">
            Order Total: ₹{calculateTotalPrice().toFixed(2)}
          </h3>
          <p className="text-green-600 text-sm font-medium">
            Your Savings: ₹{SAVINGS.toFixed(2)} ({SAVINGS_PERCENT}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
