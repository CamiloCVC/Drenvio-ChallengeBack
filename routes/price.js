const express = require('express')
const router = express.Router()


const {getPrice} = require("../controllers/price");
// Getting all products

router.get('/:user_id/:producto',getPrice)


module.exports = router