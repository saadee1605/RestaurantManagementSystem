const pool = require('../config/config');

const addCategory = async (data) => {
    try {

        const query = `INSERT INTO category (category_name) VALUES (?)`;
        const result = await pool.promise().query(query, [data]);
        console.log(512, result);

        console.log('Data inserted in category table successfully!');
    } catch (error) {
        console.log('Error occurred while inserting in category table:', error);
        throw error;
    }
}

const addItem = async (data) => {
    try {
        const query = `INSERT INTO item (item_name, item_quantity, item_price, description, category_id,image_link) 
                       VALUES (?, ?, ?, ?, ?,?)`;
        await pool.promise().query(query, [
            data.itemName,
            data.itemQuantity,
            data.itemPrice,
            data.description,
            data.categoryId,
            data.imagePath
        ]);
        console.log('Data inserted in item table successfully!');
    } catch (error) {
        console.log('Error occurred while inserting in item table:', error);
        throw error;
    }
}

const getIdByName = async (data) => {
    try {

        const query = `SELECT category_id FROM category WHERE category_name = ?`;
        const [result] = await pool.promise().query(query, [data]);
        if (result.length === 0) {
            return null;
        }
        return result[0].category_id;
    } catch (error) {
        console.log('Error in getIdByName:', error);
        throw error;
    }
}
const getItem = async () => {
    try {
        console.log(88990);

        const query = `SELECT * FROM item WHERE item_name = 'ee'`;
        const [result] = await pool.promise().query(query);

        if (result.length === 0) {
            return null;
        }
        console.log(result[0]);

        return result[0];
    } catch (error) {
        console.log('Error in getItem:', error);
        throw error;
    }
}
const getCertainItem = async (data) => {
    try {
        const querry = 'SELECT * FROM item where item_name=?'
        const result = await pool.promise().query(querry, [data])
        if (result[0].length > 0) {
            console.log('Item fetched successfully1');
            return result[0]
        }
        else {
            const querry = 'SELECT * FROM item where item_id=?'
            const result = await pool.promise().query(querry, [data])
            if (result[0].length > 0) {
                console.log('Item fetched successfully2');
                return result[0]
            }
        }
        console.log('No certain item founded');

        return null;

    } catch (error) {
        console.log('Error in getting certain item', error);
        throw error

    }
}
const updateItem = async (data) => {
    try {
        console.log('Data to update:', data);

        const query = 'UPDATE item SET item_name = ?, description = ?, image_link = ?, item_price = ?, item_quantity = ? WHERE item_id = ?';

        const [result] = await pool.promise().query(query, [
            data.item_name,
            data.description,
            data.image_link,
            data.item_price,
            data.item_quantity,
            data.itemId,
        ]);

        if (result.affectedRows > 0) {
            return { message: "Item updated successfullyttt!" };
        } else {
            return { message: "Item not found!" };
        }
    } catch (error) {
        console.error('Error updating item in the database:', error);
        throw error;
    }
};
const deleteItem = async (ident) => {
    try {
      const query = 'DELETE FROM item WHERE item_id = ? OR item_name = ?';
      const [result] = await pool.promise().query(query, [ident, ident]);      
      return result;
    } catch (error) {
      console.error('Error in deleteItem model:', error);
      throw error; 
    }
  };
  
module.exports = { deleteItem, addCategory, updateItem, addItem, getIdByName, getItem, getCertainItem }
