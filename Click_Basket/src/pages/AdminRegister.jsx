import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AdminRegister() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-100 to-orange-200 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-orange-200"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-orange-600 text-center tracking-wide">
          User Register
        </h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
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

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold transition duration-200"
        >
          Register
        </button>

        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-orange-500 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
