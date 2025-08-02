import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null;

  // Fallback if image fails to load
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
        onError={handleImageError}
      />

      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-1 mb-2">{product.description}</p>
      <p className="text-xl text-blue-600 font-bold mb-4">₹{product.price}</p>

      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-lg transition"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
