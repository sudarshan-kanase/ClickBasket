import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AdminRegister() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/register", form);
      alert(res.data.message || "Registered successfully");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white border border-orange-300 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-6 tracking-wide">
          Create  Account
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <br />
          <br />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <br />
          <br />
          <input
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <br />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>
          <br />
        <button
          type="submit"
          className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
        >
          Register
        </button>
          <br />
        <h5 className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-orange-500 font-medium hover:underline">
            Login here
          </Link>
        </h5>
      </form>
    </div>
  );
}
