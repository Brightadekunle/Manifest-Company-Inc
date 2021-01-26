const indexGet = (req, res, next) => {
    res.render('customer', { title: "Customer Page" })
}

module.exports = {
    indexGet,
}