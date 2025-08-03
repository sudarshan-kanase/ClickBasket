// src/components/ProductSearch.jsx
import React, { useState } from "react";

export default function ProductSearch({ products }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.price.toString().includes(query)
    );
  });

  return (
    <div className="px-4 py-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, price, or category..."
          className="w-full max-w-xl border border-gray-300 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-sm bg-white dark:bg-zinc-800"
          >
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              💰 ₹{product.price}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              📦 {product.category}
            </p>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
