// CartSidebar.jsx
import React, { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  fetchCart,
} from '../redux/slice/cartSlice';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartSidebar = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const calculateTotalPrice = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      ref={ref}
     className={`fixed top-0 right-0 min-h-screen w-96 text-black bg-white shadow-lg z-50 transform transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}


    >
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={() => dispatch(toggleCart())}>✕</button>
      </div>

      <div className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
        {items.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          items.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-2">
              <div className="flex gap-2">
                <img src={item.images} alt="product" className="w-16 h-16 object-cover" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <div className="text-sm text-gray-600">
                    {item.colors && <p>Color: {item.colors}</p>}
                    {item.sizes && <p>Size: {item.sizes}</p>}
                  </div>
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(decreaseQuantity(item._id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item._id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.product))}>
                  <MdDeleteOutline className="text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{calculateTotalPrice().toFixed(2)}</span>
        </div>
        <Link
          to={items.length > 0 ? "/buynow" : "#"}
          className={`block mt-4 text-center py-2 rounded ${
            items.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
          }`}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
});

export default CartSidebar;
