import React, { useState } from "react";
import Login from "./Login.js";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    donationType: "donation",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Welcome ${formData.fullName}! You registered for ${formData.donationType}.`
    );
    setFormData({
      fullName: "",
      email: "",
      password: "",
      donationType: "donation",
    });
  };

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
          <span className="text-blue-600">🚀 Register with RBMI WORLD</span>
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 md:p-14">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a strong password"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Donation Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Register For
              </label>
              <select
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="donation">💰 General Donation</option>
                <option value="blood">🩸 Blood Donation</option>
                <option value="clothes">👕 Clothes Donation</option>
                <option value="food">🍲 Food Donation</option>
                <option value="volunteer">🙌 Volunteer Work</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              ✅ Register Now
            </button>
          </form>

          {/* Already have account */}
          <p className="mt-6 text-center text-gray-600">
            Already registered?{" "}
            <a
              href="#login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here
            </a>
          </p>

          {/* Render Login Component */}
          <div id="login" className="mt-10">
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
