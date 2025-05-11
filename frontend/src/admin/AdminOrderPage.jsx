// AdminOrderPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders, updateOrderStatus } from "../redux/slice/orderSlice";
import { generateInvoice } from "./generateInvoice";


const AdminOrderPage = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const handleStatusChange = (orderId, newStatus) => {
    dispatch(updateOrderStatus({ orderId, status: newStatus }));
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Orders</h2>
      {Array.isArray(orders) && orders.map((order) => (
  <div key={order._id} className="border p-4 mb-4 rounded shadow">
    <p><strong>User:</strong> {order.user?.name} ({order.user?.email})</p>
    <p><strong>Status:</strong> {order.orderStatus}</p>
    <p>
      <strong>Payment Method:</strong>{" "}
      <span className={`font-semibold ${order.paymentMethod === "COD" ? "text-red-500" : "text-green-600"}`}>
        {order.paymentMethod}
      </span>
    </p>
    <p><strong>Total:</strong> ₹{order.totalAmount}</p>

    <select
      value={order.orderStatus}
      onChange={(e) => handleStatusChange(order._id, e.target.value)}
      className="mt-2 p-1 border"
    >
      <option value="Processing">Processing</option>
      <option value="Shipped">Shipped</option>
      <option value="Arriving">Arriving</option>
      <option value="Delivered">Delivered</option>
    </select>

    <button
      onClick={() => generateInvoice(order)}
      className="mt-2 ml-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download Invoice
    </button>
  </div>
))}

    </div>
  );
};

export default AdminOrderPage;
