import React, { useEffect, useState } from 'react';
import '../CSS/ItemDisplay.css';
import RelatedProducts from '../JSX/RelatedProducts';
import { addToCart } from '../../../Redux/StoreSlice/CartSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const ItemDisplay = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [message, setSuccessMessage] = useState('');
  const dispatch = useDispatch();

  const add = async (item) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/cart/addToCart',
        {},
        { withCredentials: true }
      );

      dispatch(addToCart(item));
      setSuccessMessage('Added to cart successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error during add to cart operation:', error);
      setSuccessMessage('Failed to add item to cart. Please try again.');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div className='asdasd'>
      <div className='item-display-in-detail'>
        <img 
          className='item-display-in-detail-img' 
          src={props.item.picture} 
          alt={props.item.name} 
        />
        <h2>{props.item.name}</h2>
        <h4>{props.item.description}</h4>
        <h5>PKR {props.item.price}</h5>
        <button onClick={() => add(props.item)}>Add to Cart</button>
        {message && (
          <p style={{
            backgroundColor: 'blue',
            color: 'white',
            width: '50%',
            margin: '10px auto',
            textAlign: 'center',
            padding: '10px',
          }}>
            {message}
          </p>
        )}
      </div>
      <hr style={{ marginTop: '40px' }} />
      <RelatedProducts 
        category={props.item.category} 
        setItem={props.setItem} 
      />
    </div>
  );
};

export default ItemDisplay;
