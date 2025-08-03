import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ProfilePage() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("adminUser");
    if (storedUser) {
      setAdmin(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center px-4 relative">
      
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/HomePage")}
        className="absolute top-6 left-6 text-orange-600 hover:text-orange-800 flex items-center gap-2"
      >
        <FaArrowLeft /> Back to Home
      </button>

      {/* Profile Card */}
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">User Profile</h2>
        <div className="space-y-4 text-gray-800 text-sm sm:text-base">
          <div><span className="font-semibold">👤 Name:</span> {admin.name || "N/A"}</div>
          <div><span className="font-semibold">📧 Email:</span> {admin.email}</div>
          <div><span className="font-semibold">📱 Mobile:</span> {admin.mobile || "N/A"}</div>
        </div>

        <button
          className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          onClick={() => {
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("adminUser");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
