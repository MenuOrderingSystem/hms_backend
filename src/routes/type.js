const {Router} = require('express')
const{getAllType, postType, deleteType, modifyType} = require('../controllers/Type');
const { typeValidation } = require('../middleware/validation');



const router = Router();

router.post('/', typeValidation, postType)

router.get('/', getAllType)

router.delete('/:id', deleteType)

router.patch('/:id', modifyType)


module.exports=router;