const orderModel = require('../models/orderModel'); 
const userModel = require('../models/userModel');
 
const addToCart = async (req, res) => {
    console.log('i cart controller add to cart');
    res.status(200).json({ message: 'Item added to cart successfully' });
}
const confirmOrder=async(req,res)=>{
    try {
        const refeshToken=req.cookies.refreshToken
        const login_id=await userModel.getLoginId(refeshToken)
        const data={
            login_id:login_id[0].login_id,
            order_status:"Working",
            special_notes:req.body.specialNotes,
            total_items:req.body.totalItems,
            total_amount:req.body.totalAmount
        }                
       const orderid= await orderModel.addOrderDetails(data)
        const itemsArray=req.body.allCartsData
        itemsArray.forEach(async(elem,index)=>{
            const itemData={
                orderId:orderid,
                item_name:elem.name,
                item_price:elem.price,
                total_price:elem.price*elem.itemQuantity,
                item_quantity:elem.itemQuantity
            }
            await orderModel.addtheDetailsofItemsInOrder(itemData)
            
        })
        
    } catch (error) {
        console.log('error in addorderDetails',error);
        res.status(500).send('Error adding to cart',error);
    }

}
module.exports = {addToCart,confirmOrder};
