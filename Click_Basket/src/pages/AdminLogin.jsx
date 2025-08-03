import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/login", form);
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminUser", JSON.stringify(res.data.user));
      navigate("/HomePage");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-100 to-orange-200 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-orange-200"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-orange-600 text-center tracking-wide">
          User Login
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
          required
        />

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold transition duration-200"
        >
          Login
        </button>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/admin-register" className="text-orange-500 font-medium hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
