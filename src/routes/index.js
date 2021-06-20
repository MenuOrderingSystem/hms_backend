const express = require( 'express');
const FoodCategory = require( './foodCategory')
const FoodItem = require( './foodItem')
const FoodOrder = require( './order')

const app = express();


app.use('/food', FoodItem)
app.use('/category', FoodCategory)
app.use('/order', FoodOrder)


module.exports = app;