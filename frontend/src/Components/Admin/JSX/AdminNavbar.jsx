import React from 'react';
import '../CSS/AdminNavbar.css';
import { Link } from 'react-router-dom';

const AdminNavbar = (props) => {
  const formatName = (name) => {
    if (name.length > 10) {
      return name.substring(0, 10) + '...'; // Truncate and add ellipsis
    }
    return name; // Return full name if <= 10 characters
  };
  const name1 = formatName('Saad Ramzan');


  return (
    <div className="admin-navbar">
      <div className="admin-navbar-left">
        <h2>Foodie's Restaurant</h2>
        <div className="admin-navbar-user-name">
        </div>
      </div>
      <ul className="admin-nav-ul">
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/dashboard">Dashboard</Link>
        </li>
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/menu">Menu</Link>
        </li>
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/addItem">Add Item</Link>
        </li>
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/modifyItem">Modify Item</Link>
        </li>
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/deleteItem">Delete Item</Link>
        </li>
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/manage-orders">Orders</Link>
        </li>
        <li className="admin-nav-li">
          <Link className="admin-navlink" to="/manage-inventory">Inventory</Link>
        </li>
      </ul>
      <div className="admin-navbar-right">
        <Link to={props.showLoginOrLogout === 'Logout' ? '/logout' : '/signup'} className="abc-nav">
          <p>{props.showLoginOrLogout}</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
