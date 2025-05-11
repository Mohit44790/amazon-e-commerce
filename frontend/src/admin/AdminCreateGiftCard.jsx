import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGiftCard } from '../redux/slice/giftCardSlice';
import AssignGiftCard from './AssignGiftCard';

const AdminCreateGiftCard = () => {
  const [code, setCode] = useState('');
  const [balance, setBalance] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const { error } = useSelector(state => state.giftCards);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createGiftCard({ code, balance, expirationDate })).unwrap();
      setSuccessMessage('Gift card created successfully!');
      setErrorMessage('');
      setCode('');
      setBalance('');
      setExpirationDate('');
    } catch (err) {
      setErrorMessage(err || 'Failed to create gift card.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create Gift Card</h2>

        {successMessage && <p className="text-green-600 font-medium">{successMessage}</p>}
        {(error || errorMessage) && <p className="text-red-600 font-medium">{error || errorMessage}</p>}

        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Gift Card Code"
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Balance"
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create Gift Card
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Assign Gift Card to User</h3>
        <AssignGiftCard />
      </div>
    </div>
  );
};

export default AdminCreateGiftCard;
