const {Router} = require( 'express');
const { getAllFoods } = require('../controllers/FoodItem');

const router = Router();

router.get('/', getAllFoods)

module.exports=router;