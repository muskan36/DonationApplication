import React, { useState } from "react";
import { supabase } from "../api/supabaseClient";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cause, setCause] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonation = async () => {
    if (!amount || amount <= 0) {
      alert("Please select or enter a valid amount");
      return;
    }
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }

    setLoading(true);

    try {
      // Step 1 - Get logged in user
      const { data: { user } } = await supabase.auth.getUser();

      // Step 2 - Create Razorpay order from server
      const response = await fetch("http://localhost:8000/api/v1/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("Failed to create order");
        setLoading(false);
        return;
      }

      // Step 3 - Open Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: "INR",
        name: "Eco & Animal Protection Initiative",
        description: cause || "Donation",
        order_id: data.order.id,
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: { color: "#16a34a" },
        handler: async function (response) {
          // Step 4 - Save donation to Supabase after success
          const saveResponse = await fetch("http://localhost:8000/api/v1/save-donation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user?.id || null,
              name,
              email,
              amount: Number(amount),
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
            }),
          });

          const saveData = await saveResponse.json();

          if (saveData.success) {
            alert(`🎉 Thank you ${name}! Payment of ₹${amount} successful!\nPayment ID: ${response.razorpay_payment_id}`);
            // Reset form
            setAmount("");
            setName("");
            setEmail("");
            setPhone("");
            setCause("");
            setMessage("");
          } else {
            alert("Payment successful but failed to save record.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        alert("Payment failed: " + response.error.description);
      });
      rzp.open();

    } catch (error) {
      alert("Something went wrong: " + error.message);
    }

    setLoading(false);
  };

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
                className={`px-6 py-2 rounded-lg transition ${
                  amount === value
                    ? "bg-green-600 text-white"
                    : "bg-green-100 dark:bg-gray-700 dark:text-white hover:bg-green-300 dark:hover:bg-gray-600"
                }`}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          <select
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            className="border p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option>Select Cause</option>
            <option>Animal Protection</option>
            <option>Plant Trees</option>
            <option>Environmental Awareness</option>
          </select>
        </div>

        {/* Message */}
        <textarea
          placeholder="Message (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded-lg w-full mt-4 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        ></textarea>

        {/* Donate Button */}
        <button
          onClick={handleDonation}
          disabled={loading}
          className="w-full mt-8 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-white py-3 rounded-lg transition disabled:opacity-75"
        >
          {loading ? "Processing..." : `Donate ₹${amount || "Now"}`}
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