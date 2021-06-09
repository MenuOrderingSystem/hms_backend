const {Router} = require( 'express');
const { getAllFoods,
        postFood,
        getFoodById,
        deleteFood
 } = require('../controllers/FoodItem');

const {upload} = require('../middleware/mutler')

const router = Router();

router.get('/', getAllFoods)

router.post('/',upload.single('myImage'), postFood)
router.get('/:id', getFoodById)
router.delete('/:id', deleteFood)

module.exports = router;