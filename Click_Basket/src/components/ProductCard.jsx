import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [showModal, setShowModal] = useState(false);

  if (!product) return null;

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.015] transition-all duration-300 ease-in-out p-4 flex flex-col justify-between h-full">
        {/* Hover Zoom on Image */}
        <div
          className="overflow-hidden rounded-lg mb-4 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={product.image}
            alt={product.name || "Product Image"}
            onError={handleImageError}
            className="w-full h-52 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 mb-2 line-clamp-2">{product.description}</p>
          <p className="text-xl text-blue-600 font-bold mb-4">₹{product.price}</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-xl font-medium transition-all duration-300"
        >
          🛒 Add to Cart
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black bg-white hover:bg-gray-200 rounded-full p-1"
            >
              ❌
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain max-h-[80vh] p-4"
              onError={handleImageError}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
