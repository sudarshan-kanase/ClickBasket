import React, { useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:3000/api/contact", form);
      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Error: " + (err.response?.data?.error || "Server error"));
    }
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-12 bg-emerald-50 dark:bg-zinc-900 min-h-screen text-zinc-900 dark:text-white relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/HomePage")}
        className="absolute top-6 left-6 text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-white flex items-center gap-2"
      >
        <FaArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-8">
          📞 Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-xl shadow-lg space-y-5 transition-all duration-300"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg w-full sm:w-auto transition-all"
          >
            ✉️ Send Message
          </button>

          {status && (
            <p className="text-sm mt-3 text-center font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
