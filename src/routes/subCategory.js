const {Router} = require('express')

const { 
    getAllSubCategory, 
    postSubCategory,
    deleteSubCategory
} = require( '../controllers/SubCategory');

const { subCategoryValidation } = require('../middleware/validation');


const {upload} = require('../middleware/mutler')

const router = Router();


router.get('/', getAllSubCategory)

router.post('/', upload('./src/uploads/subcategory').single('image'), subCategoryValidation ,postSubCategory)


router.delete('/:id', deleteSubCategory)


module.exports=router;