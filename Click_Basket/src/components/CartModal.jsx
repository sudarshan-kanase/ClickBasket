import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { X, Plus, Minus } from "lucide-react";

const CartModal = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  const handlePlaceOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all the fields!");
      return;
    }

    const orderData = {
      name,
      mobile,
      address,
      total,
      items: cart,
    };

    try {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Failed to place order");

      await response.json();
      alert("🎉 Order placed successfully!");
      clearCart();
      onClose();
    } catch (error) {
      console.error("Order Error:", error);
      alert("❌ Failed to place order. Try again.");
    }
  };

  return (
    <div className="fixed top-20 right-4 w-[95%] max-w-md z-50 bg-white border border-gray-300 shadow-xl rounded-2xl p-5 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">🛒 Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-600 transition duration-200"
        >
          <X size={22} />
        </button>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto pr-1 scroll-smooth">
          {cart.map((item) => (
            <li
              key={item.id}
              className="py-3 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  ₹{item.price} × {item.quantity}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm">{item.quantity}</span>
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
                className="text-red-500 hover:text-red-700 text-xs font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* User Info Fields */}
      {cart.length > 0 && (
        <>
          <div className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <textarea
              placeholder="Delivery Address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Total & Button */}
          <div className="mt-5 flex justify-between items-center font-medium text-gray-800">
            <span>Total:</span>
            <span className="text-lg font-bold">₹{total}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            ✅ Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartModal;
