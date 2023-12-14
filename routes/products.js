const express = require('express')
const router = express.Router()

// Getting all products
const {getProducts} = require("../controllers/products");

router.get('/', getProducts)


module.exports = router