const adminModel = require('../models/admin');
const pool = require('../config/config');

const getInfo = async (req, res) => {
  try {
    console.log("Controller: Fetching dashboard info...");
    const result = await adminModel.getInfo();
    res.status(200).json(result); 
  } catch (error) {
    console.error("Error in getInfo controller:", error);
    res.status(500).json({ message: 'Failed to fetch dashboard info' });
  }
};
const getOrders = async (req, res) => {
  try {
    const query = `
      SELECT 
        o.order_id,
        o.total_amount,
        o.order_date,
        s.username AS customer_name
      FROM \`order\` o
      JOIN login l ON o.login_id = l.login_id
      JOIN signup s ON l.signup_id = s.signup_id
    `;
    
    const [orders] = await pool.promise().query(query);
    console.log('Fetched Orders:', orders);
    
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
const inventory=async(req,res)=>{
try {
  console.log(445);
  
  const q1=`select * from inventory`
   
  const [result] = await pool.promise().query(q1);
  console.log(result);
  
  console.log('Fetched Orders:', result);
  
  res.status(200).json(result);
} catch (error) {
  
}}
const updateInventory = async (req, res) => {
  console.log(554);
  
  const { item_id, quantity } = req.body;
  try {
    // Ensure that the quantity is a valid number
    if (isNaN(quantity) || quantity < 0) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }
  console.log(item_id,quantity);
  
    const query = `UPDATE inventory SET quantity = ? WHERE item_id = ?`;
    const [result] = await pool.promise().query(query, [quantity, item_id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Inventory updated successfully' });
  } catch (error) {
    console.error('Error updating inventory:', error);
    res.status(500).json({ message: 'Failed to update inventory' });
  }
};

module.exports = { getInfo,getOrders ,inventory,updateInventory};
