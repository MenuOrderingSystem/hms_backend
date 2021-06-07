const express = require( 'express');
const FoodCategory = require( './foodCategory')
const FoodItem = require( './foodItem')

const app = express();
app.use('/food', FoodItem)
app.use('/category', FoodCategory)


module.exports = app;