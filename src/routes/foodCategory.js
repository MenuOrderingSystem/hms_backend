const {Router} = require('express')

const { 
    getAllCategory, 
    postCategory,
    deleteCategory,
    getCategoryById 
} = require( '../controllers/FoodCategory');

const router = Router();

router.get('/', getAllCategory)
router.post('/',  postCategory)
router.get('/:id',  getCategoryById)
router.delete('/:id', deleteCategory)

module.exports=router;