import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
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
      />{" "}
    </Routes>
     </Router>
  );
}

export default App;
