const express = require('express')
const Router = express.Router()
const { homeController } = require('../controllers/home')

Router.get('/', homeController)

module.exports = Router
