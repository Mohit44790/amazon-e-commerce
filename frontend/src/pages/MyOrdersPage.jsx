import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyOrders } from "../redux/slice/orderSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MyOrdersPage = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  const getStatusBadge = (status) => {
    const base = "px-2 py-1 text-xs rounded-full font-medium";
    switch (status.toLowerCase()) {
      case "delivered":
        return `${base} bg-green-100 text-green-700`;
      case "pending":
        return `${base} bg-yellow-100 text-yellow-700`;
      case "cancelled":
        return `${base} bg-red-100 text-red-700`;
      default:
        return `${base} bg-gray-100 text-gray-700`;
    }
  };

  const formatDate = (isoDate) => new Date(isoDate).toLocaleString();

  const skeletonLoader = (
    <div className="space-y-4 animate-pulse">
      {Array(3)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="h-32 bg-gray-200 rounded-lg" />
        ))}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">🧾 My Orders</h2>

      {loading && skeletonLoader}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && Array.isArray(orders) && orders.length === 0 && (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      )}

      <div className="space-y-6">
        {Array.isArray(orders) &&
          orders.map((order, index) => (
            <motion.div
              key={order._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Order ID: <span className="font-medium text-gray-700">{order._id}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Placed on: <span className="text-gray-800">{formatDate(order.createdAt)}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-semibold text-gray-700">Status:</span>{" "}
                    <span className={getStatusBadge(order.orderStatus)}>
                      {order.orderStatus}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-gray-700">Total:</span> ₹ {order.totalAmount}
                  </p>
                </div>

                <div className="mt-4 lg:mt-0 flex flex-col gap-2">
                  <Link
                    to={`/delivery-status/${order._id}`}
                    className="text-sm text-blue-600 hover:underline font-medium"
                  >
                    Track Order →
                  </Link>
                  <button className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                    Reorder
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Items:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {order.orderItems.map((item, idx) => {
                    const product = item.product || {};
                    const productName = product.name || "Unknown Product";
                    const productImage = product.images?.[0] || "/placeholder.jpg";
                    const quantity = item.quantity || 1;

                    return (
                      <div key={idx} className="flex gap-3 items-center bg-gray-50 p-2 rounded shadow-sm">
                        <img
                          src={productImage}
                          alt={productName}
                          className="w-16 h-16 object-cover rounded border"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{productName}</p>
                          <p className="text-xs text-gray-500">Qty: {quantity}</p>
                          <button className="text-xs text-blue-500 hover:underline mt-1">
                            View Details
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default MyOrdersPage;
