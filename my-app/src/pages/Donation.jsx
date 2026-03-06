import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-colors duration-300">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-4">
          Support Our Mission
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Your donation helps us protect animals and preserve nature.
        </p>

        {/* Donation Amount */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Select Donation Amount
          </h2>

          <div className="flex gap-4 flex-wrap">
            {[100, 500, 1000, 2000].map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className="px-6 py-2 bg-green-100 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-green-300 dark:hover:bg-gray-600 transition"
              >
                ₹{value}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-4 w-full border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Donation Form */}
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          <select className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600">
            <option>Select Cause</option>
            <option>Animal Protection</option>
            <option>Plant Trees</option>
            <option>Environmental Awareness</option>
          </select>

        </div>

        {/* Message */}
        <textarea
          placeholder="Message (Optional)"
          className="border p-2 rounded-lg w-full mt-4 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        ></textarea>

        {/* Payment */}
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Payment Method
          </h2>

          <div className="flex gap-6 text-gray-700 dark:text-gray-300">
            <label>
              <input type="radio" name="payment" /> UPI
            </label>

            <label>
              <input type="radio" name="payment" /> Card
            </label>

            <label>
              <input type="radio" name="payment" /> Net Banking
            </label>
          </div>
        </div>

        {/* Donate Button */}
        <button className="w-full mt-8 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-white py-3 rounded-lg transition">
          Donate Now
        </button>

        {/* Impact Section */}
        <div className="mt-10 text-center text-gray-600 dark:text-gray-300">
          <p>🌳 ₹100 plants 2 trees</p>
          <p>🐾 ₹500 helps feed rescued animals</p>
          <p>🌍 ₹1000 supports environmental awareness programs</p>
        </div>

      </div>
    </div>
  );
};

export default Donate;