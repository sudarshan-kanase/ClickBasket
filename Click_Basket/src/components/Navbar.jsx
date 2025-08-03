import React from 'react';

const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50 px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
          ClickBasket
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl w-full">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-5 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-4 text-gray-700">

          <a href="/HomePage" className="flex flex-col items-center text-xs hover:text-blue-600">
            <img src="/icons/home.png" alt="Home" className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="hidden sm:inline mt-1">Home</span>
          </a>

          <a href="/admin-profile" className="flex flex-col items-center text-xs hover:text-blue-600">
            <img src="/icons/profile.png" alt="Profile" className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="hidden sm:inline mt-1">Profile</span>
          </a>

          <a href="/ContactPage" className="flex flex-col items-center text-xs hover:text-blue-600">
            <img src="/icons/help.png" alt="Help" className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="hidden sm:inline mt-1">Help</span>
          </a>

          {/* Cart Icon */}
          <button className="relative hover:text-blue-600">
            <img src="/icons/cart.png" alt="Cart" className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
