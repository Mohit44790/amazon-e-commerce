import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SellerDashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
  });

  const navigate = useNavigate();

  // Example target values for progress bars
  const targetSales = 10000;
  const targetOrders = 100;
  const targetProducts = 100;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token'); // adjust as needed from your auth
        const res = await axios.get('http://localhost:8000/api/products/seller/stats', {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setStats(res.data);
      } catch (err) {
        console.error('Error fetching seller stats:', err);
      }
    };

    fetchStats();
  }, []);

  // Calculate progress percentages for cards
  const salesPercentage = stats.totalSales
    ? Math.min((stats.totalSales / targetSales) * 100, 100).toFixed(0)
    : 0;
  const ordersPercentage = stats.totalOrders
    ? Math.min((stats.totalOrders / targetOrders) * 100, 100).toFixed(0)
    : 0;
  const productsPercentage = stats.totalProducts
    ? Math.min((stats.totalProducts / targetProducts) * 100, 100).toFixed(0)
    : 0;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        title="Total Sales"
        value={`₹${stats.totalSales.toLocaleString()}`}
        percentage={salesPercentage}
      />
      <Card
        title="Total Orders"
        value={stats.totalOrders}
        percentage={ordersPercentage}
      />
      <Card
        title="Total Products"
        value={stats.totalProducts}
        percentage={productsPercentage}
        route="/seller/products-list"
      />
    </div>
  );
};

const Card = ({ title, value, route, percentage }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={() => route && navigate(route)}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-2xl font-bold text-green-600">{value}</p>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage Text */}
      <div className="text-sm text-gray-500 mt-1">{percentage}%</div>
    </div>
  );
};

export default SellerDashboard;
