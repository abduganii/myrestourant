const express = require('express')
const router = express.Router()
const restourants = require('./restourants/restouran')
const cotegory = require('./category/category')
const foods = require('./foods/food')

router
    .get('/', restourants.GET)
    .get('/cotegory', cotegory)
    .get('/Foods', foods)
    .post('/',restourants.POST)
    
module.exports= router