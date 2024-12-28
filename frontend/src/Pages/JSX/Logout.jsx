import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = (props) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); 
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      
      console.log(response);
      if (response.status === 200) {
        props.setName(null);
        alert(response.data.message);
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to logout. Please try again.');
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: '#fff', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>Do you really want to logout?</p>
        <div>
          <button 
            onClick={handleCancel} 
            style={{ 
              padding: '10px 15px', 
              marginRight: '10px', 
              backgroundColor: '#007bff', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            Cancel
          </button>
          <button 
            onClick={handleLogout} 
            style={{ 
              padding: '10px 15px', 
              backgroundColor: '#dc3545', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;