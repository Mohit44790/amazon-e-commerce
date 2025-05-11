import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { assignGiftCardToUser } from '../redux/slice/giftCardSlice';
import axios from 'axios';
import { USER_API_END_POINT } from '../redux/constants/userConstants';
import { toast } from 'react-toastify';

const AssignGiftCard = () => {
  const [userId, setUserId] = useState('');
  const [giftCardId, setGiftCardId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [giftCards, setGiftCards] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [userRes, cardRes] = await Promise.all([
          axios.get(`${USER_API_END_POINT}/user/admin/all-users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }),
          axios.get(`${USER_API_END_POINT}/giftcards/cards`)
        ]);

        setUsers(userRes.data.users); // Ensure your backend sends `users: [...]`
        setGiftCards(cardRes.data);
      } catch (error) {
        console.error(error);
        setErrorMessage('Failed to load users or gift cards.');
        toast.error(error.response?.data?.message || 'Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  const handleAssign = async () => {
    setErrorMessage('');
    try {
      await dispatch(assignGiftCardToUser({ userId, giftCardId })).unwrap();
      setUserId('');
      setGiftCardId('');
      toast.success('Gift card assigned successfully');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || 'Failed to assign gift card.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Assign Gift Card to User</h2>

      <div className="space-y-4">
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select User</option>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <option key={user._id} value={user._id}>{user.email}</option>
            ))
          ) : (
            <option value="" disabled>No users available</option>
          )}
        </select>

        <select
          value={giftCardId}
          onChange={(e) => setGiftCardId(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Gift Card</option>
          {giftCards.map((card) => (
            <option key={card._id} value={card._id}>
              {card.code} - ${card.balance}
            </option>
          ))}
        </select>

        {errorMessage && <div className="text-red-600 text-sm">{errorMessage}</div>}

        <button
          onClick={handleAssign}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Assign Gift Card
        </button>
      </div>
    </div>
  );
};

export default AssignGiftCard;
