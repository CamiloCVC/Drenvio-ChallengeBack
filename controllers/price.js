const Users = require("../models/User.js");
const Product = require("../models/Product");


const getPrice = async (req, res) => {
  try {
    const { user_id, producto } = req.params;

    const product = await Product.findOne({ name: producto });

    if (product) {
      // Lógica para verificar si existe un precio especial para el usuario
      const productBrand = product.brand
      const specialPrice = await Users.findOne({ _id: user_id,  special_price: { $in: [productBrand] }});

      if (specialPrice) {
        res.json(product.special_price);
      } else {
        res.json(product.base_price);
      }
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getPrice };
