import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", college: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <div className="bg-opacity-10 text-white py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Register Now</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-transparent p-6 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white outline-none"
          required
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white outline-none"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
