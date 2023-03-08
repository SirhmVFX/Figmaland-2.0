const express = require("express")
const router = express.Router()

const pageControllers = require("./controllers/pageControllers")

router.get("/", pageControllers.homepage)
router.get("/product", pageControllers.productPage)

module.exports = router