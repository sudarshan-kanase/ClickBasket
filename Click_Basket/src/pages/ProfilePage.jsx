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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-100 flex items-center justify-center px-4 sm:px-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/HomePage")}
        className="absolute top-5 left-4 sm:top-6 sm:left-6 text-orange-700 hover:text-orange-900 flex items-center gap-2 text-sm sm:text-base transition-all"
      >
        <FaArrowLeft />
        <span>Back to Home</span>
      </button>

      {/* Profile Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg border border-orange-300 hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-6">
          Admin Profile
        </h2>

        <div className="space-y-4 text-gray-800 text-base">
          <ProfileItem icon="/icons/profile.png" label="Name" value={admin.name || "N/A"} />
          <ProfileItem icon="/icons/mail.png" label="Email" value={admin.email} />
          <ProfileItem icon="/icons/mobile.png" label="Mobile" value={admin.mobile || "N/A"} />
        </div>
          <br />
        <button
          onClick={() => {
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("adminUser");
            navigate("/");
          }}
          className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function ProfileItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all text-sm sm:text-base">
      <img src={icon} alt={`${label} icon`} className="w-6 h-6 shrink-0" />
      <span className="font-semibold">{label}:</span>
      <span className="truncate">{value}</span>
    </div>
  );
}
