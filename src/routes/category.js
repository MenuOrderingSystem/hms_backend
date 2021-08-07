const {Router} = require('express')

const { 
    getAllCategory, 
    postCategory,
    deleteCategory,
    getCategoryById 
} = require( '../controllers/Category');

const { categoryValidation } = require('../middleware/validation');

const {upload} = require('../middleware/mutler')

const router = Router();

router.get('/', getAllCategory)

router.post('/', upload('./src/uploads/category').single('image'), categoryValidation, postCategory)

router.get('/:id',  getCategoryById)

router.delete('/:id', deleteCategory)

module.exports=router;