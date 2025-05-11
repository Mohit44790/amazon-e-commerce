// SignUp.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/slice/authSlice';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

 
const [formData, setFormData] = useState({
  name:'',  
  email: '',
    password: '',
  });

  const {name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && password.trim()) {
      dispatch(registerUser({name, email, password}));
    } else {
      alert('Please fill in all fields');
    }
  };

  // Redirect to home page if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Logo */}
      <div className="flex justify-center items-center mb-10">
        <img
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
          alt="Amazon"
          className="w-28 object-contain"
        />
        <span className="text-xl font-semibold text-black ml-1">.in</span>
      </div>

      {/* Sign-up Box */}
      <div className="bg-white border border-gray-300 rounded-md w-full max-w-md mx-auto p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold mb-4">Create Account</h1>

          {/* Name */}
          <label htmlFor="name" className="block text-left text-sm mb-1">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name='name'
            value={name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Full Name"
          />

          {/* Email */}
          <label htmlFor="email" className="block text-left text-sm mb-1">
            Email
          </label>
          <input
           type="text"
           id="email"
           name="email"
           value={email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Email"
          />

          {/* Password */}
          <label htmlFor="password" className="block text-left text-sm mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name='password'
            value={password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Password"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 transition duration-200 w-full py-2 rounded-full font-semibold mb-4"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      </div>

      {/* Footer */}
      <div className="text-center mt-10 text-xs text-gray-600">
        <div className="flex justify-center gap-6 mb-2">
          <p className="hover:underline cursor-pointer">Conditions of Use</p>
          <p className="hover:underline cursor-pointer">Privacy Notice</p>
          <p className="hover:underline cursor-pointer">Help</p>
        </div>
        <p>© 1996–{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default SignUp;
