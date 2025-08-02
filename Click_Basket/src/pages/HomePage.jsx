// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import HeroBanner from '../components/HeroBanner';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <HeroBanner />

        <section
          id="product-section"
          className="px-4 sm:px-6 lg:px-12 py-10 scroll-mt-20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
            Featured Products
          </h2>

          <ProductList selectedCategory={selectedCategory} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
