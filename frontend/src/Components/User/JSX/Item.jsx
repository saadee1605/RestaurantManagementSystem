import React, { useState } from 'react';
import '../CSS/Item.css';
import { addToCart } from '../../../Redux/StoreSlice/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import AddedToCart from './AddedToCart';
const Item = (props) => {
    const dispatch = useDispatch();
    const [message, setSuccessMessage] = useState(null) ;

    const add = async (payload) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/cart/addToCart',
                {}, 
                { withCredentials: true }
            );    
            dispatch(addToCart(payload)); // Dispatching action to Redux store    

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
    

    const setItem = (item) => {
        props.setTheItem(item);
    };

    return (
        <div className='Item'>
            <Link to='/productshow' className='linkkk'>
                <img 
                    className='item-image' 
                    src={props.elem.picture} 
                    alt={props.elem.name} 
                    onClick={() => setItem(props.elem)}
                />
            </Link>
            <p>{props.elem.name}</p>
            <button onClick={() => add(props.elem)}>Add To Cart</button>
            <p className='show-message-item'>{message}</p>
            {/* <AddedToCart message={message} /> */}
        </div>
    );
};

export default Item;
