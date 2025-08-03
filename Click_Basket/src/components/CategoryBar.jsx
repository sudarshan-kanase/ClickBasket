import React from 'react';

const categories = [
  { name: 'All', icon: '/icons/all.png' },
  { name: 'Minutes', icon: '/icons/delivery.png' },
  { name: 'Top Offers', icon: '/icons/offers.png' },
  { name: 'Mobiles & Tablets', icon: '/icons/mobile.png' },
  { name: 'TVs & Appliances', icon: '/icons/tv.png' },
  { name: 'Electronics', icon: '/icons/electronics.png' },
  { name: 'Fashion', icon: '/icons/fashion.png' },
  { name: 'Beauty, Food..', icon: '/icons/beauty.png' },
  { name: 'Home & Kitchen', icon: '/icons/kitchen.png' },
  { name: 'Furniture', icon: '/icons/furniture.png' },
  { name: 'Flight Bookings', icon: '/icons/flight.png' },
  { name: 'Grocery', icon: '/icons/grocery.png' },
];

const CategoryBar = ({ selectedCategory, onSelectCategory }) => {
  const handleCategoryClick = (categoryName) => {
    onSelectCategory(categoryName);
    const section = document.getElementById('product-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-4 px-4 sm:px-8 shadow-sm sticky top-16 z-30 border-b border-gray-200">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-5 text-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl transition duration-200 hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
              selectedCategory === category.name
                ? 'text-blue-600 font-semibold bg-blue-100 shadow'
                : 'text-gray-700'
            }`}
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <span className="text-xs sm:text-sm mt-2 truncate w-[80px] sm:w-[90px]">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
