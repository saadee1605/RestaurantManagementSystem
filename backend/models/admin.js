const pool = require('../config/config');

const getInfo = async () => {
  try {
    const q1 = `SELECT COUNT(signup_id) AS totalSignups FROM signup`;
    const q2 = `SELECT COUNT(order_id) AS totalOrders FROM \`order\``; 
    const q3 = `SELECT SUM(total_amount) AS totalSales FROM \`order\``;
    const q4 = `
      SELECT item_name, COUNT(item_name) AS itemCount 
      FROM order_items 
      GROUP BY item_name 
      ORDER BY itemCount DESC 
      LIMIT 1
    `;

    // Execute queries
    const [totalSignupsResult] = await pool.promise().query(q1);
    const [totalOrdersResult] = await pool.promise().query(q2);
    const [totalSalesResult] = await pool.promise().query(q3);
    const [mostSaledItemResult] = await pool.promise().query(q4);

    console.log(mostSaledItemResult);

    return {
      totalSignups: totalSignupsResult[0]?.totalSignups || 0,
      totalOrders: totalOrdersResult[0]?.totalOrders || 0,
      totalSales: totalSalesResult[0]?.totalSales || 0,
      mostSaledItem: mostSaledItemResult[0]?.item_name || 'No data',
      count: mostSaledItemResult[0]?.itemCount || 0, 
    };
  } catch (error) {
    console.error('Error fetching dashboard info:', error);
    throw error;
  }
};
const inventory=async(req,res)=>{
  
}
const abc = async () => {
};

module.exports = { getInfo, abc };
