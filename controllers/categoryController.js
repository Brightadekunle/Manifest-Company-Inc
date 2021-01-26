const indexGet = (req, res, next) => {
    res.render('category', { title: "Category Page" })
}

module.exports = {
    indexGet,
}