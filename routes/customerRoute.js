const express = require('express')
const router = express.Router()

const customerController = require('../controllers/customerController')

router.get('/', customerController.indexGet)

module.exports = router