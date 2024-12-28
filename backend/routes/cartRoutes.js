const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const {verifyAccessToken}=require('../middleware/authMiddleware')

router.post('/addToCart',verifyAccessToken, cartController.addToCart);

module.exports = router;
