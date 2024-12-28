const cartModel = require('../models/cartModel'); 
const addToCart = async (req, res) => {
    console.log('in cart controller add to cart');
    
    try {
        res.send('Item added to cart');
    } catch (error) {
        res.status(500).send('Error adding to cart');
    }
};

module.exports = {addToCart};
