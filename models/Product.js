const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = new Schema({
  base_price: { type: Number, required: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  special_price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

module.exports = model("Products", productSchema);
