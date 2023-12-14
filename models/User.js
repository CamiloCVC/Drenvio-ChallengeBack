const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const priceSchema = new Schema({
  name: { type: String, required: true },
  special_price: { type: [String], required: true },
});

module.exports = model("Users", priceSchema);