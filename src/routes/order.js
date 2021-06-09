const {Router} = require('express')
const { 
    getAllOrder, 
    postOrder ,
    deleteOrder,
    getOrderById
} = require( '../controllers/Order');

const router = Router();

router.get('/', getAllOrder)
router.post('/', postOrder)
router.get('/:id', getOrderById)
router.delete('/:id', deleteOrder)

module.exports=router;