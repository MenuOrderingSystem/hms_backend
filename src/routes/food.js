const {Router} = require( 'express');

const { getAllFoods,
        postFood,
        getFoodById,
        deleteFood,
        editFood
 } = require('../controllers/Food')

 const { foodValidation } = require('../middleware/validation');

const {upload} = require('../middleware/mutler')


const router = Router();

router.get('/', getAllFoods)

router.post('/', upload('./src/uploads/food').single('image'), foodValidation, postFood)

router.get('/:id', getFoodById)

router.delete('/:id', deleteFood)

router.patch('/:id',  editFood)

module.exports = router;