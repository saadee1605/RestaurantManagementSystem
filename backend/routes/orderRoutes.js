const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const {verifyAccessToken}=require('../middleware/authMiddleware')
router.post('/addToCart',verifyAccessToken,orderController.addToCart);
router.post('/confirmOrder',verifyAccessToken,orderController.confirmOrder)
module.exports = router;
