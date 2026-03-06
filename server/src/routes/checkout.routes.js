const express = require("express");
const router = express.Router();
const { createOrder, saveDonation } = require("../controllers/checkout.controller");

router.post("/create-order", createOrder);
router.post("/save-donation", saveDonation);

module.exports = router;