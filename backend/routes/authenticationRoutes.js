const express = require('express');
const router = express.Router();
const authController = require('../controllers/authenticationController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout)
router.get('/getuser', authController.getCurrentUser)

module.exports = router;
