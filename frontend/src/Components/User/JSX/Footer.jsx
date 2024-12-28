import React from 'react'
import '../CSS/Footer.css'
const Footer = (props) => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>{props.restaurant} Restaurant</h3>
            <p>123 Food Street, City, Country</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@{props.restaurant}restaurant.com</p>
          </div>
          <div className="footer-right">
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Foodie's Restaurant. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
