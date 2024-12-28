import axios from 'axios';
import React, { useState } from 'react';

const DeleteItem = () => {
    const [itemIdentifier, setItemIdentifier] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/addItemToCart/deleteItem/${itemIdentifier}`);
            if (response.status === 200) {
                setMessage('Item deleted successfully!');
                setError('');
            } else {
                setMessage('');
                setError('Item not found or could not be deleted.');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            setError('Error deleting item. Please try again later.');
            setMessage('');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '30px auto', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center' }}>Delete Item</h2>
            <label htmlFor="itemIdentifier" style={{ display: 'block', marginBottom: '10px' }}>
                Enter the name or ID of the item to delete:
            </label>
            <input
                id="itemIdentifier"
                type="text"
                placeholder="e.g., 1 or cake"
                value={itemIdentifier}
                onChange={(e) => setItemIdentifier(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button 
                onClick={handleDelete} 
                style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Delete Item
            </button>

            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            {message && <div style={{ color: 'green', marginTop: '10px' }}>{message}</div>}
        </div>
    );
};

export default DeleteItem;