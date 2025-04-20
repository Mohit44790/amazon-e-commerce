import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 = email, 2 = password
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    if (step === 1) {
      if (emailOrPhone.trim()) {
        setStep(2);
      } else {
        alert('Please enter your mobile number or email');
      }
    } else if (step === 2) {
      if (password.trim()) {
        // In real app: validate login here
        navigate('/');
      } else {
        alert('Please enter your password');
      }
    }
  };

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

      {/* Sign-in Box */}
      <div className="bg-white border border-gray-300 rounded-md w-full max-w-md mx-auto p-6 shadow-sm">
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
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Password"
            />
          </>
        )}

        <button
          className="bg-yellow-400 hover:bg-yellow-500 transition duration-200 w-full py-2 rounded-full font-semibold mb-4"
          onClick={handleContinue}
        >
          Continue
        </button>

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

export default SignIn;
