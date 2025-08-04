import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { X, Plus, Minus } from "lucide-react";

const CartModal = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!form.name || !form.mobile || !form.address) {
      alert("Please fill all fields");
      return;
    }

    const orderData = {
      name: form.name,
      mobile: form.mobile,
      address: form.address,
      total,
      items: cart,
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Failed to place order");

      const result = await response.json();
      alert("🎉 Order placed successfully!");
      clearCart();
      setForm({ name: "", mobile: "", address: "" });
      onClose();
    } catch (error) {
      console.error("Order Error:", error);
      alert("❌ Failed to place order. Try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-20 bg-white shadow-2xl rounded-xl w-[90%] max-w-sm z-50 border border-gray-200 p-5 animate-fade-in max-h-[90vh] overflow-y-auto">
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
        <ul className="divide-y divide-gray-200 max-h-52 overflow-y-auto pr-1">
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

      {/* Cart Total */}
      {cart.length > 0 && (
        <>
          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between font-semibold text-gray-700 mb-3">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>

            {/* Order Form */}
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
                rows={2}
              ></textarea>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
