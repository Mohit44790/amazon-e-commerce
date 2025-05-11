import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redeemGiftCard } from '../redux/slice/giftCardSlice';

const RedeemGiftCard = () => {
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleRedeem = async () => {
    if (!code || !amount) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await dispatch(redeemGiftCard({ code, amount })).unwrap();
      setMessage(`Success: ${response.message} Remaining: $${response.remainingBalance}`);
      setCode('');
      setAmount('');
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Redeem Gift Card</h2>

      {message && (
        <div className={`mb-4 p-3 rounded text-sm ${message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Gift Card Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Amount to Redeem"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleRedeem}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Redeem
        </button>
      </div>
    </div>
  );
};

export default RedeemGiftCard;
