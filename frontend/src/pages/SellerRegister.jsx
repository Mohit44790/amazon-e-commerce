// src/pages/SellerRegister.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SellerRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    storeName: "",
    gstNumber: "",
    panNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/user/register-seller", form);
      toast.success("Seller registered successfully!");
      navigate("/signin");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Register as a Seller</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Full Name", name: "name" },
          { label: "Email", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Store Name", name: "storeName" },
          { label: "GST Number", name: "gstNumber" },
          { label: "PAN Number", name: "panNumber" },
          { label: "Business Address", name: "address" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SellerRegister;
