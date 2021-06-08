const {Router} = require('express')
const { 
    getAllOrder, 
    postOrder 
} = require( '../controllers/Order');

const router = Router();

router.get('/', getAllOrder)
router.post('/', postOrder)

module.exports=router;