const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">

        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-600">
          ClickBasket
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl w-full">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-4 text-lg text-gray-700 font-medium">

          <a href="/HomePage" className="flex items-center gap-1 hover:text-blue-600">
            🏠 <span className="hidden sm:inline">Home</span>
          </a>

          <a href="/admin-profile" className="flex items-center gap-1 hover:text-blue-600">
            👤 <span className="hidden sm:inline">Profile</span>
          </a>

          <a href="/ContactPage" className="flex items-center gap-1 hover:text-blue-600">
            ❓ <span className="hidden sm:inline">Help</span>
          </a>

          <button className="relative text-2xl hover:text-blue-600">
            🛒
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
