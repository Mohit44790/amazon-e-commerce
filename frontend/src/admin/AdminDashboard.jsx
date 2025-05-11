import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d'];

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0,
    pendingOrders: 0,
    dispatchedOrders: 0,
  });

  // Optional targets to calculate percentage
  const targetSales = 1000000; // For example
  const targetUsers = 500;
  const targetProducts = 500;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/products/admin/stats');
       
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  // Derived percentages
  // const pendingOrders = orders.filter((o) => o.status === 'pending').length;
  //   const dispatchedOrders = orders.filter((o) => o.status === 'dispatched').length;
    const salesPercentage = stats.totalSales
    ? Math.min((stats.totalSales / targetSales) * 100, 100).toFixed(0)
    : 0;
    const ordersFulfilled =
    stats.totalOrders && stats.dispatchedOrders !== undefined
      ? ((stats.dispatchedOrders / stats.totalOrders) * 100).toFixed(0)
      : 0;
  const userPercentage = Math.min((stats.totalUsers / targetUsers) * 100, 100).toFixed(0);
  const productPercentage = Math.min((stats.totalProducts / targetProducts) * 100, 100).toFixed(0);
  const pendingPercentage = stats.totalOrders
    ? ((stats.pendingOrders / stats.totalOrders) * 100).toFixed(0)
    : 0;
  const dispatchedPercentage = ordersFulfilled;

  const orderData = [
    { name: 'Pending', value: stats.pendingOrders },
    { name: 'Dispatched', value: stats.dispatchedOrders },
  ];

  const userData =[
    {name: 'Sales' ,value:stats.totalSales},
    {name: 'Users' ,value:stats.totalUsers},
  ]

  const salesData = [
    { month: 'Jan', sales: 24000 },
    { month: 'Feb', sales: 13980 },
    { month: 'Mar', sales: 9800 },
    { month: 'Apr', sales: 39080 },
    { month: 'May', sales: 48000 },
  ];

  return (
    <>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Total Sales" value={`₹${stats.totalSales}`} percentage={salesPercentage} />
      <Card title="Total Orders" value={stats.totalOrders} percentage={ordersFulfilled} />
    <Link to={"/admin/getuser"}> <Card title="Total Users" value={stats.totalUsers} percentage={userPercentage} /></Link> 
      <Link to="/admin/products">
        <Card title="Total Products" value={stats.totalProducts} percentage={productPercentage} />
      </Link>
      <Card title="Pending Orders" value={stats.pendingOrders} percentage={pendingPercentage} />
      <Card title="Dispatched Orders" value={stats.dispatchedOrders} percentage={dispatchedPercentage} />
    </div>
       {/* Pie Chart */}
 <div className="col-span-1 flex bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-4">Order Status</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={orderData} cx="50%" cy="50%" label outerRadius={80} dataKey="value">
              {orderData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <h2 className="text-xl font-semibold mb-4">User Status</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={userData} cx="50%" cy="50%" label outerRadius={80} dataKey="value">
              {userData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
        {/* Line Chart */}
        <div className="col-span-2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const Card = ({ title, value, route, percentage }) => {
  const navigate = useNavigate();
 
  return (
    <>
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
          ></div>
      </div>

      {/* Percentage Text */}
      <div className="text-sm text-gray-500 mt-1">{percentage}%</div>

 
    </div>
 
          </>
  );
};

export default AdminDashboard;
