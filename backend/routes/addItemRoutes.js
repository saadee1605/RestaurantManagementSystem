const express = require('express');
const router = express.Router();
const itemController=require('../controllers/addItemController')

router.post('/addItem', itemController.addItemToCart);
router.get('/getItem',itemController.getItem)
router.get('/getSpecificItem/:ident',itemController.getSpecificItem)
router.put('/updateItem/:id',itemController.updateItem)
router.delete('/deleteItem/:ident',itemController.deleteItem)
module.exports = router;