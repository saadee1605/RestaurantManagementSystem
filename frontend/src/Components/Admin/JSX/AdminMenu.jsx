import React, { useState } from 'react';
import '../CSS/AdminMenu.css';
import axios from 'axios';

const AdminMenu = () => {
  const [categoryName, setCategoryName] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageName, setImageName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const staticPath = '/pictures/';
    const fullPath = staticPath + imageName;

    const dataToSend = {
      categoryName,
      itemName,
      itemQuantity,
      itemPrice,
      description,
      imagePath: fullPath,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/addItemToCart/addItem', dataToSend);
      console.log(response.data.message);
      alert('Item saved successfully!');
    } catch (error) {
      console.error('Error saving item:', error);
      alert('Failed to save item.');
    }
  };

  return (
    <div className="admin-menu">
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input
            type="text" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="e.g., Appetizers" required
          />
        </label>
        <label>
          Item Name:
          <input
            type="text" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="e.g., Spring Rolls" required
          />
        </label>
        <label>
          Item Quantity:
          <input
            type="number" name="itemQuantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} placeholder="e.g., 10" required
          />
        </label>
        <label>
          Item Price:
          <input
            type="number" name="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} placeholder="e.g., 150" required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description of the item" required
          ></textarea>
        </label>
        <label>
          Enter Image Name:
          <input
            type="text" name="imageName" ue={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="e.g., image1.jpg" required
          />
        </label>
        <button type="submit">Save Item</button>
      </form>
    </div>
  );
};

export default AdminMenu;
