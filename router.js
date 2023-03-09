const express = require("express")
const router = express.Router()

const pageControllers = require("./controllers/pageControllers")

router.get("/", pageControllers.homepage)
router.get("/product", pageControllers.productPage)
router.get("/product-list", pageControllers.productList)

module.exports = router