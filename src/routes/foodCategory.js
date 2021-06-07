const {Router} = require('express')
const { 
    getAllCategory, 
    postCategory 
} = require( '../controllers/FoodCategory');

const router = Router();

router.get('/', getAllCategory)
router.post('/', postCategory)

module.exports=router;