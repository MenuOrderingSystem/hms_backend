const {Router} = require( 'express');
const { getAllFoods, postFood } = require('../controllers/FoodItem');

const {upload} = require('../middleware/mutler')

const router = Router();

router.get('/', getAllFoods)

router.post('/',upload.single('myImage'), postFood)

module.exports = router;