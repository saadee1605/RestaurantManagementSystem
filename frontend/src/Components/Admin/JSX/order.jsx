import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getorders'); // Replace with your API endpoint
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders on component mount
  }, []);

  // Inline styles
  const outerBoxStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    width: '90%',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center', // Center align text and content
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  };

  const noOrdersStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#666',
    marginTop: '20px',
  };

  const orderListStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align all list items
  };

  const innerBoxStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
    textAlign: 'left',
    width: '40%', // Set width to 40%
    boxSizing: 'border-box',
  };

  const orderTextStyle = {
    fontSize: '16px',
    color: '#555',
    margin: '5px 0',
  };

  return (
    <div style={outerBoxStyle}>
      <h2 style={titleStyle}>All Orders</h2>
      {orders.length === 0 ? (
        <p style={noOrdersStyle}>No orders found.</p>
      ) : (
        <ul style={orderListStyle}>
          {orders.map((order, index) => (
            <li key={index} style={innerBoxStyle}>
              <p style={orderTextStyle}>
                <strong>Order ID:</strong> {order.order_id}
              </p>
              <p style={orderTextStyle}>
                <strong>Customer Name:</strong> {order.customer_name}
              </p>
              <p style={orderTextStyle}>
                <strong>Total Amount:</strong> RS {order.total_amount} PKR
              </p>
              <p style={orderTextStyle}>
                <strong>Date:</strong> {new Date(order.order_date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;