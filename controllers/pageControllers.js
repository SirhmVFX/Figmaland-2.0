exports.homepage = function(req, res) {
    res.render("homepage", {pageTitle: "homepage"})
}

exports.productPage = function(req, res) {
    res.render("product", {pageTitle: "Products"})
}

exports.productList = function(req, res) {
    res.render("product-list")
}