const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const positionsModel = mongoose.model("Position",PositionsSchema);
module.exports = { positionsModel };