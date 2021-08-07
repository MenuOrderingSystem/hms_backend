const express = require( 'express');

const FoodCategory = require( './category')
const FoodSubCategory = require( './subCategory')
const FoodItem = require( './food')
const FoodOrder = require( './order')
const FoodType = require( './type')

const app = express();


app.use('/food', FoodItem)
app.use('/category', FoodCategory)
app.use('/subCategory', FoodSubCategory)
app.use('/order', FoodOrder)
app.use('/type', FoodType)


module.exports = app;