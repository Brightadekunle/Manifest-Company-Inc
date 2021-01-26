const indexGet = (req, res, next) => {
    res.render('product', { title: "Product Page" })
}

module.exports = {
    indexGet,
}