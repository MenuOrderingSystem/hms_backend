const {check, body} = require('express-validator')

exports.foodValidation = [
    body("name", "Name is required").not().isEmpty(),
    // body("image", "Image is required").not().isEmpty(),
    body("category", "Category is required").not().isEmpty(),
    body("subCategory", "Sub-Category is required").not().isEmpty(),
    body("price", "Price is required").not().isEmpty(),
    body("rating", "Rating is required").not().isEmpty(),
    body("status", "Status is required").not().isEmpty(),
    body("type", "Type is required").not().isEmpty(),
    body("description", "Description is required").not().isEmpty(),
]

exports.typeValidation = [
    body("type", "Type is required").not().isEmpty()
]


exports.categoryValidation = [
    body("name", "name is required").not().isEmpty(),
    // body("image", "image is required").not().isEmpty()
]


exports.subCategoryValidation = [
    body('name', "name is required").not().isEmpty(),
    // body('image', "image is required").not().isEmpty(),
    body('category', "category is required").not().isEmpty(),
]


exports.orderValidation = [
    body('table_no', "table_no is required").not().isEmpty(),
    body('food', "Food is required").not().isEmpty()
]

