import React, { useState } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [updatedQuantity, setUpdatedQuantity] = useState('');

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/inventory'); // Replace with your actual API endpoint
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const updateQuantity = async (itemId) => {
    if (!updatedQuantity) {
      alert('Please enter a valid quantity');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/admin/updateinventory', {
        item_id: itemId,
        quantity: updatedQuantity,
      });

      if (response.status === 200) {
        // Update the local items state with the updated quantity
        setItems((prevItems) => 
          prevItems.map((item) =>
            item.item_id === itemId ? { ...item, quantity: updatedQuantity } : item
          )
        );
        alert('Inventory updated successfully!');
      }
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  // Inline styles
  const outerBoxStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    width: '90%',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
    color: '#333',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  };

  const noDataStyle = {
    fontSize: '18px',
    color: '#777',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  };

  return (
    <div style={outerBoxStyle}>
      <h2 style={titleStyle}>Inventory</h2>
      <button style={buttonStyle} onClick={fetchItems}>
        Fetch Inventory
      </button>

      <div>
        <label>Update Quantity: </label>
        <input
          type="number"
          value={updatedQuantity}
          onChange={(e) => setUpdatedQuantity(e.target.value)}
          placeholder="Enter quantity"
        />
      </div>

      {items.length === 0 ? (
        <p style={noDataStyle}>No items found in the inventory.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Item ID</th>
              <th style={thStyle}>Item Name</th>
              <th style={thStyle}>Quantity Left</th>
              <th style={thStyle}>Unit</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.item_id}>
                <td style={tdStyle}>{item.item_id}</td>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.quantity}</td>
                <td style={tdStyle}>{item.unit}</td>
                <td style={tdStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => updateQuantity(item.item_id)}
                  >
                    Update Quantity
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Inventory;
