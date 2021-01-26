const indexGet = (req, res, next) => {
    res.render('order', { title: "Order Page" })
}

module.exports = {
    indexGet,
}