const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);

const Razorpay = require("razorpay");
const { createClient } = require("@supabase/supabase-js");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const saveDonation = async (req, res) => {
  try {
    const { user_id, name, email, amount, payment_id, order_id } = req.body;
    const { data, error } = await supabase
      .from("donations")
      .insert([{ user_id, name, email, amount, payment_id, order_id }]);
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createOrder, saveDonation };