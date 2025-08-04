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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-200 to-orange-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md md:max-w-xl lg:max-w-2xl bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-orange-300 transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6 tracking-wide">
          User Login
        </h2>

        <div className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200"
          />
            <br /><br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mt-4 font-medium">
            {error}
          </p>
        )}
        <br />
        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md"
        >
          Login
        </button>
        <br />
        <h5 className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/admin-register"
            className="text-orange-500 font-medium hover:underline"
          >
            Register here
          </Link>
        </h5>
      </form>
    </div>
  );
}
