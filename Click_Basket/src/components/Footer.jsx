// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">ClickBasket</h2>
          <p className="text-sm text-gray-300">
            Your one-stop shop for daily essentials, electronics, and more. Fast delivery and great deals, always.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="/profile" className="hover:text-cyan-400">Profile</a></li>
            <li><a href="/cart" className="hover:text-cyan-400">Cart</a></li>
            <li><a href="/help" className="hover:text-cyan-400">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-1">Email: <a href="mailto:support@clickbasket.com" className="hover:text-cyan-400">support@clickbasket.com</a></p>
          <p className="text-sm text-gray-300 mb-4">Phone: <a href="tel:+919876543210" className="hover:text-cyan-400">+91 98765 43210</a></p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-gray-400 py-4">
        &copy; 2025 ClickBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
