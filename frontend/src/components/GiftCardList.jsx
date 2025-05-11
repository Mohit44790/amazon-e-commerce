import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGiftCards, fetchMyGiftCards } from '../redux/slice/giftCardSlice';

const GiftCardList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.giftCards);

  useEffect(() => {
    dispatch(fetchGiftCards());
    dispatch(fetchMyGiftCards()); // If needed to fetch user's specific gift cards
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold text-gray-700">Loading gift cards...</div>
      </div>
    );
  }

  if (status === 'failed' || !items.length) {
    return (
      <div className="text-center p-6">
        <h3 className="text-xl font-semibold text-gray-700">No gift cards found.</h3>
        <p className="text-gray-500">It looks like you don't have any gift cards at the moment. Please check back later or contact support.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Gift Cards</h3>

      <ul className="space-y-4">
        {items.map(card => (
          <li key={card.code} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <div>
              <strong className="text-lg text-blue-600">{card.code}</strong>
              <p className="text-sm text-gray-600">Expires: {new Date(card.expirationDate).toLocaleDateString()}</p>
            </div>
            <div>
              <span className="text-xl font-semibold">${card.balance}</span>
              <span className="block text-xs text-gray-500">Balance</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftCardList;
