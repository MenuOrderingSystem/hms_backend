const {Router} = require('express')
const { 
    getAllOrder, 
    postOrder ,
    deleteOrder,
    getOrderById
} = require( '../controllers/Order');

const router = Router();

const {orderValidation} = require('../middleware/validation')

router.get('/', getAllOrder)

router.post('/', orderValidation,  postOrder)

router.get('/:id', getOrderById)

router.delete('/:id', deleteOrder)

module.exports=router;