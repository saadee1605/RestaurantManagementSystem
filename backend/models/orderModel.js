const pool = require('../config/config');

const addOrderDetails = async (data) => {
    try {
        const query = `INSERT INTO \`order\` (login_id, order_status, special_notes, total_items, total_amount) VALUES (?, ?, ?, ?, ?)`;
        const [result] = await pool.promise().query(query, [
            data.login_id,
            data.order_status,
            data.special_notes,
            data.total_items,
            data.total_amount
        ]);
        return result.insertId;

    } catch (error) {
        console.log('Error in the addOrderDetails model', error);
        throw error;
    }
};
const addtheDetailsofItemsInOrder = async (data) => {
    try {
        const query = `INSERT INTO order_items (order_id,item_id,item_name,item_quantity,item_price,total_price) VALUES(?,?,?,?,?,?)`
        await pool.promise().query(query,[data.orderId,1,data.item_name,data.item_quantity,data.item_price,data.total_price])
    } catch (error) {
        console.log('Error in adddtheDetailsofItemsInOrder function', error);
    }
}
module.exports = { addOrderDetails, addtheDetailsofItemsInOrder };
