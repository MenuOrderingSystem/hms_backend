const {check} = require('express-validator')

exports.foodValidation = [
    check("name", "Name is required").not().isEmpty(),
    check("image", "Name is required").not().isEmpty(),
    check("category", "Name is required").not().isEmpty(),
    check("type", "Name is required").not().isEmpty(),
    check("price", "Name is required").not().isEmpty(),
]

