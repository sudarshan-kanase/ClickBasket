import React from "react";
import { useCart } from "../context/CartContext";
import { X, Plus, Minus } from "lucide-react"; // Optional: You can use any icon library

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-20 bg-white shadow-2xl rounded-xl w-[90%] max-w-sm z-50 border border-gray-200 p-5 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          <X size={22} />
        </button>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm">Your cart is empty</p>
      ) : (
        <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto pr-1">
          {cart.map((item) => (
            <li key={item.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  ₹{item.price} × {item.quantity}
                </div>
                <div className="flex items-center mt-1 gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Cart Footer */}
      {cart.length > 0 && (
        <>
          <div className="mt-5 flex justify-between font-semibold text-gray-700">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={() => {
              alert("🎉 Order placed successfully!");
              clearCart();
              onClose();
            }}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartModal;
