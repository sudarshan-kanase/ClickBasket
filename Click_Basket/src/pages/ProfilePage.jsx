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
        className="absolute top-6 left-6 text-orange-600 hover:text-orange-800 flex items-center gap-2 text-sm sm:text-base"
      >
        <FaArrowLeft /> Back to Home
      </button>

      {/* Profile Card */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300 hover:scale-[1.01] border border-orange-300">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Admin Profile</h2>

        <div className="space-y-5 text-gray-800 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <img src="/icons/profile.png" alt="User Icon" className="w-6 h-6" />
            <span className="font-semibold">Name:</span> {admin.name || "N/A"}
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/mail.png" alt="Email Icon" className="w-6 h-6" />
            <span className="font-semibold">Email:</span> {admin.email}
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/mobile.png" alt="Mobile Icon" className="w-6 h-6" />
            <span className="font-semibold">Mobile:</span> {admin.mobile || "N/A"}
          </div>
        </div>

        <button
          className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md"
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
