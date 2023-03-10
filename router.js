const express = require("express")
const router = express.Router()

const pageControllers = require("./controllers/pageControllers")

router.get("/", pageControllers.homepage)
router.get("/product", pageControllers.productPage)
router.get("/product/product-list", pageControllers.productList)
router.get("/pricing", pageControllers.pricingPage)

module.exports = router