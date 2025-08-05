const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const ordersModel = new mongoose.model("Order", OrdersSchema);
module.exports = { ordersModel };