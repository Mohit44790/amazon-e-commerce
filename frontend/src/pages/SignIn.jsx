import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slice/authSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const { user, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (email.trim()) {
        setStep(2);
      } else {
        alert('Please enter your mobile number or email');
      }
    } else if (step === 2) {
      if (password.trim()) {
        dispatch(loginUser(formData));
      } else {
        alert('Please enter your password');
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="flex justify-center items-center mb-10">
        <img
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
          alt="Amazon"
          className="w-28 object-contain"
        />
        <span className="text-xl font-semibold text-black ml-1">.in</span>
      </div>

      <div className="bg-white border border-gray-300 rounded-md w-full max-w-md mx-auto p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold mb-4">
            {step === 1 ? 'Sign in or create account' : 'Welcome'}
          </h1>

          {step === 1 && (
            <>
              <label htmlFor="email" className="block text-left text-sm mb-1">
                Enter mobile number or email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Email or Mobile number"
              />
            </>
          )}

          {step === 2 && (
            <>
              <label htmlFor="password" className="block text-left text-sm mb-1">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Password"
              />
            </>
          )}

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 transition duration-200 w-full py-2 rounded-full font-semibold mb-4"
            disabled={loading}
          >
            {loading ? 'Loading...' : step === 1 ? 'Continue' : 'Sign In'}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <p className="text-xs text-gray-600 mb-4">
          By continuing, you agree to Amazon's{' '}
          <span className="text-blue-600 cursor-pointer hover:underline">Conditions of Use</span> and{' '}
          <span className="text-blue-600 cursor-pointer hover:underline">Privacy Notice</span>.
        </p>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm font-medium">Buying for work?</p>
          <button className="text-blue-600 text-sm hover:underline">
            Shop on Amazon Business
          </button>
        </div>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Create Account
          </a>
        </p>
      </div>

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

export default SignIn;
