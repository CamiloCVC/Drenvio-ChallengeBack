const Products = require("../models/Product.js")



const getProducts = async (req, res) => {
  try {
    const products = await Products.find({stock: {$gt: 0}})
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send({ message: "Theres no colors" });
  }
};

module.exports={getProducts}