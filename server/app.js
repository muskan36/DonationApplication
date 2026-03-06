const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "https://donation-application.vercel.app"
  ],
  methods: ["GET", "POST"],
}));
app.use(express.json());
app.use(helmet());

const checkout = require("./src/routes/checkout.routes");
app.use("/api/v1", checkout);

app.get("/", (req, res) => {
  res.send("API is working...");
});

// Add this to debug
app.listen(process.env.PORT || 8000, () => {
  console.log("KEY:", process.env.RAZORPAY_KEY_ID);
  console.log("server is running on port 8000");
});