import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalSignups: 0,
    totalOrders: 0,
    totalSales: 0,
    mostSaledItem: '',
    itemCount: 0,
  });

  const getDashboard = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getinfo'); // Replace with your API endpoint
      const { totalSignups, totalOrders, totalSales, mostSaledItem, count } = response.data;

      setDashboardData({
        totalSignups,
        totalOrders,
        totalSales,
        mostSaledItem,
        itemCount: count,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  // Inline styles
  const outerBoxStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    width: '90%',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const innerBoxStyle = {
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '16px',
    
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const textStyle = {
    fontSize: '18px',
    color: '#333',
    margin: '5px 0',
  };

  return (
    <div style={outerBoxStyle}>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={getDashboard}
      >
        Load Dashboard
      </button>

      <div style={innerBoxStyle}>
        <p style={textStyle}>Total Signups: {dashboardData.totalSignups}</p>
      </div>
      <div style={innerBoxStyle}>
        <p style={textStyle}>Total Orders: {dashboardData.totalOrders}</p>
      </div>
      <div style={innerBoxStyle}>
        <p style={textStyle}>Total Sales: {dashboardData.totalSales} PKR</p>
      </div>
      <div style={innerBoxStyle}>
        <p style={textStyle}>Most Saled Item: {dashboardData.mostSaledItem}</p>
      </div>
      <div style={innerBoxStyle}>
        <p style={textStyle}>Most Saled Item Count: {dashboardData.itemCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;