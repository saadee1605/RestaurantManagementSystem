const express = require('express');
const router = express.Router();
const admin=require('../controllers/admin')
router.get('/getinfo', admin.getInfo);
router.get('/getorders', admin.getOrders);
router.get('/inventory',admin.inventory)
router.post('/updateinventory',admin.updateInventory)
module.exports = router;