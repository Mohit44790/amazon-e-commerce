// components/CartSidebar.jsx
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    calculateTotalPrice,
  } = useCart();

  
  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCart}>✕</button>
      </div>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-black">No items in cart.</p>
        ) : (
          cartItems.map((item, i) => (
            <div key={i} className="border-b py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="text-sm p-1 font-bold border   rounded-full text-gray-600"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="text-sm font-bold">{item.quantity}</span>
                <button
                  className="text-sm text-gray-600 p-1 font-bold border   rounded-full"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="text-sm text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                 <MdDeleteOutline size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">${calculateTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-semibold">Total</span>
          <span className="font-semibold text-lg">
            ${calculateTotalPrice().toFixed(2)}
          </span>
        </div>
       <Link to={"/buynow"}><button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full mt-4 font-semibold">
          Process to Buy
        </button></Link> 
      </div>
    </div>
  );
};

export default CartSidebar;
