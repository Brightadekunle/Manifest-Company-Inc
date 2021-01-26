const express = require('express')
const db = require('./configuration/database')
const expressLayouts = require('express-ejs-layouts')

const app = express()

db.authenticate()
    .then(() => console.log(`Database connected...`))
    .catch(err => console.log(`Error - ${err}`))


app.use(expressLayouts)
app.set('view engine', 'ejs')


const customerRoutes = require('./routes/customerRoute')
const categoryRoutes = require('./routes/categoryRoute')
const orderRoutes = require('./routes/orderRoute')
const productRoutes = require('./routes/productRoute')

app.use('/customer', customerRoutes)
app.use('/category', categoryRoutes)
app.use('/order', orderRoutes)
app.use('/product', productRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`listening on PORT ${PORT}`))