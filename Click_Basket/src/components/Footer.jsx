import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand/About */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">ClickBasket</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your one-stop shop for daily essentials, electronics, and more. Fast delivery and great deals, always.
          </p>
        </div>

        {/* Quick Links with image icons */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <img src="/icons/home.png" alt="Home" className="w-5 h-5" />
              <a href="/HomePage" className="hover:text-cyan-400 transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/profile.png" alt="Profile" className="w-5 h-5" />
              <a href="/admin-profile" className="hover:text-cyan-400 transition-colors">Profile</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/cart.png" alt="Cart" className="w-5 h-5" />
              <a href="/cart" className="hover:text-cyan-400 transition-colors">Cart</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/help.png" alt="Help" className="w-5 h-5" />
              <a href="/ContactPage" className="hover:text-cyan-400 transition-colors">Help</a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">
            <img src="/icons/mail.png" alt="Help" className="w-5 h-5" />
            <a href="mailto:support@clickbasket.com" className="hover:text-cyan-400 transition-colors">support@clickbasket.com</a>
          </p>
          <p className="text-sm text-gray-300 mb-4">
                          <img src="/icons/telephone.png" alt="Help" className="w-5 h-5" />
                <a href="tel:+919876543210" className="hover:text-cyan-400 transition-colors">+91 98765 43210</a>
          </p>
          <div className="flex items-center gap-4 text-xl text-gray-400">
            <a href="https://x.com/SudarshanK7666" className="hover:text-sky-400 transition-colors"><FaTwitter /></a>
            <a href="https://www.instagram.com/sudarshan_kansae96k/" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/sudarshan-kanase-907a50288/" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Go to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-xs text-gray-400 py-4">
        &copy; {new Date().getFullYear()} ClickBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
