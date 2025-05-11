import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiLock } from "react-icons/ci";
import { FaCheckCircle, FaTruck } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { USER_API_END_POINT } from "../redux/constants/userConstants";
import { fetchCart } from "../redux/slice/cartSlice";

const OrderSuccess = () => {
  const [statusStep, setStatusStep] = useState(0);
  const dispatch = useDispatch();
  const { id: orderId } = useParams();
  const steps = [
    { label: "Order Placed", icon: <FaCheckCircle />, time: "Just now" },
    { label: "Dispatched", icon: <FaTruck />, time: "+ 2 hrs" },
    { label: "Arriving", icon: <CiLock />, time: "Tomorrow" },
    { label: "Delivered", icon: <LuPackageCheck />, time: "+ 2 days" },
  ];

  // Fetch order status from backend
  const fetchOrderStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(`http://localhost:8000/api/orders/status/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // optional, if cookies/session are used
      });
      setStatusStep(data.statusStep);
    } catch (err) {
      console.error("Error fetching order status:", err);
    }
  };

  useEffect(() => {
    fetchOrderStatus(); // initial fetch
  
    const interval = setInterval(() => {
      if (statusStep < 3) {
        fetchOrderStatus();
      } else {
        clearInterval(interval); // stop if Delivered
      }
    }, 3000);
  
    return () => clearInterval(interval);
  }, [orderId, statusStep]);
  
  const handleOrderSuccess = async () => {
    try {
      const token = localStorage.getItem('token'); // or from Redux
      await axios.delete(`${USER_API_END_POINT}/user/cart/empty`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchCart()); // Update UI immediately
    } catch (err) {
      console.error("Failed to empty cart", err);
    }
  };

  useEffect(() => {
    handleOrderSuccess();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        🎉 Order Placed Successfully!
      </h2>
      <p className="text-lg text-gray-600 text-center mb-6">Thank you for shopping with us.</p>
      <Link to="/" className="bg-blue-600  text-white px-6 py-2 mt-6  rounded">
        Continue Shopping
      </Link>

      <div className="relative flex justify-between items-center mt-8 mb-10">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 text-white
                ${
                  index < statusStep
                    ? "bg-green-600 border-green-600"
                    : index === statusStep
                    ? "bg-yellow-500 border-yellow-500"
                    : "bg-gray-300 border-gray-400"
                }`}
            >
              {step.icon}
            </motion.div>
            <p className="mt-2 text-center text-sm font-medium">{step.label}</p>
            <p className="text-xs text-gray-500">{step.time}</p>

            {index !== steps.length - 1 && (
              <div
                className={`absolute top-5 left-full w-full h-1 
                  ${
                    index < statusStep
                      ? "bg-green-600"
                      : index === statusStep
                      ? "bg-yellow-400"
                      : "bg-gray-300"
                  }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded shadow p-6 space-y-3">
        {steps.slice(0, statusStep + 1).map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-green-600">{step.icon}</span>
            <div>
              <p className="font-semibold">{step.label}</p>
              <p className="text-xs text-gray-500">ETA: {step.time}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default OrderSuccess;
