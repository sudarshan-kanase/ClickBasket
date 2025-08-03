import React from 'react';

const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 sm:px-10 py-5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">

        {/* Logo */}
        <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-wide">
          ClickBasket
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-2xl w-full px-2">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-6 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-6 text-gray-800 px-2">

          {/* Home */}
          <a
            href="/HomePage"
            className="flex flex-col items-center text-sm sm:text-base hover:text-blue-600 transition duration-200"
          >
            <img src="/icons/home.png" alt="Home" className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
            <span className="hidden sm:inline">Home</span>
          </a>

          {/* Profile */}
          <a
            href="/admin-profile"
            className="flex flex-col items-center text-sm sm:text-base hover:text-blue-600 transition duration-200"
          >
            <img src="/icons/profile.png" alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
            <span className="hidden sm:inline">Profile</span>
          </a>

          {/* Help */}
          <a
            href="/ContactPage"
            className="flex flex-col items-center text-sm sm:text-base hover:text-blue-600 transition duration-200"
          >
            <img src="/icons/help.png" alt="Help" className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
            <span className="hidden sm:inline">Help</span>
          </a>

          {/* Cart */}
          <button className="relative flex flex-col items-center text-sm sm:text-base hover:text-blue-600 transition duration-200">
            <img src="/icons/cart.png" alt="Cart" className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs rounded-full px-2 py-0.5 shadow-md">
              0
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
