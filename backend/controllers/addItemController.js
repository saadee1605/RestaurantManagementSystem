const addItemModel = require('../models/addItemModel');

const addItemToCart = async (req, res) => {    
  try {
    let category = await addItemModel.getIdByName(req.body.categoryName);
    console.log('Category retrieved:', category);
        if (!category) {
        console.log('Category does not exist. Adding new category...');
        await addItemModel.addCategory(req.body.categoryName);
        
        
        category = await addItemModel.getIdByName(req.body.categoryName);
    }

    console.log('Final category:', category);
  
    const item = {
      ...req.body, 
      categoryId: category  
    };

    const result = await addItemModel.addItem(item);
    
    res.status(200).json({ message: 'Item added to cart successfully', item: result });

  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Errora adding item to cart', error: error.message });
  }
};
const getItem = async (req, res) => {
    try {
        const data = await addItemModel.getItem(); 
        console.log(data);
        
        if (!data) {
            return res.status(404).json({ message: 'Item not found' }); 
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching item:', error);
        return res.status(500).json({ message: 'Error fetching item', error: error.message });
    }
}
const getSpecificItem = async (req, res) => {
  try {
      const identifier = req.params.ident; 
      const item = await addItemModel.getCertainItem(identifier); 
      if (item) {
          res.status(200).json (item); 
      } else {        
          res.status(404).json({ message: 'Item not fouyynd' }); 
      }
  } catch (error) {
    
      console.error('Error fetching item:', error);
      res.status(500).json({ message: 'Internall server error', error: error.message }); 
  }
};
const updateItem = async (req, res) => {
  try {
    req.body.itemId = req.params.id;
    console.log('Request Body:', req.body);

    const result = await addItemModel.updateItem(req.body);
    console.log(result);
    
    res.status(200).json(result);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Error updating item. Please try again later.' });
  }
};
const deleteItem = async (req, res) => {
  const { ident } = req.params; 
  try {
    const result = await addItemModel.deleteItem(ident);
  
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Item deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Item not found!' });
    }
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Error deleting item. Please try again later.' });
  }
};


module.exports = {deleteItem, addItemToCart ,getItem,updateItem,getSpecificItem};
