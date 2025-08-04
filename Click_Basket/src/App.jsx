// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext"; // ✅ Add this

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route
            path="/HomePage"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/admin-profile" element={<ProfilePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
