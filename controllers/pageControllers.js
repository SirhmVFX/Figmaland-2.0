exports.homepage = function(req, res) {
    res.render("homepage", {pageTitle: "homepage"})
}

exports.productPage = function(req, res) {
    res.render("product", {pageTitle: "Products"})
}

exports.productList = function(req, res) {
    res.render("product-list", {pageTitle: "Product List"})
}

exports.pricingPage = function (req, res) {
    res.render("pricing", {pageTitle: "Pricing"})
}

exports.blogPage = function (req, res) {
    res.render("blog", {pageTitle: "Blog"})
}