import React, { useState } from 'react';
import '../CSS/CartItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearAllCart } from '../../../Redux/StoreSlice/CartSlice';
import axios from 'axios';

const CartItem = () => {
    const allCartsData = useSelector((state) => state.cart.carts);
    const totalQuantity = useSelector(state => state.cart.quantity);
    const [specialNotes, setSpecialNotes] = useState('');
    const dispatch = useDispatch();
    console.log('ALL CARTS DATA', allCartsData);


    let totalAmount = allCartsData.reduce((sum, element) => {
        return sum + element.price * element.itemQuantity;
    }, 0);


    const reduce = (payload) => {
        dispatch(removeFromCart(payload));
    }

    const increase = (payload) => {
        dispatch(addToCart(payload));
    }

    const clear = () => {
        console.log(2343434);
        
        alert('Cart Cleared successfully')
        dispatch(clearAllCart());
    }

    const handleSpecialNotesText = (event) => {
        setSpecialNotes(event.target.value);
    }

    const sendToBackend = async () => {
        console.log(1212);

        const dataToSend = {
            allCartsData,
            specialNotes,
            totalItems: totalQuantity,
            totalAmount
        };
        try {
            const response = await axios.post('http://localhost:5000/api/cart/confirmOrder', dataToSend, { withCredentials: true });
            alert('Order placed successfully')
            dispatch(clearAllCart());

        } catch (error) {
            console.error('Error submitting order:', error);
        }
    }

    return (
        <div className='CartItem'>
            <h1>{totalQuantity > 0 ? `Items In Cart: ${totalQuantity}` : 'No items in cart'}</h1>
            {allCartsData.map((element, index) => (
                element.itemQuantity > 0 && (
                    <div className="cart-item" key={element.id}>
                        <img src={element.picture} alt={element.name} />

                        <div className="cart-item-data">
                            <div className='cart-item-name'>{element.name}</div>
                            <p>Price:{element.price}</p>
                            <div className="buttons">
                                <button onClick={() => reduce(element)}>-</button>
                                <p>Quantity: {element.itemQuantity}</p>
                                <button onClick={() => increase(element)}>+</button>
                            </div>
                            <div className="total-price-item">
                                Total: PKR {(element.price * element.itemQuantity).toFixed(2)}
                            </div>
                            <div>{element.text}</div>
                        </div>
                    </div>
                )
            ))}
            {totalQuantity > 0 &&
            <>
            <textarea
                name="specialNotes"
                id="textarea"
                placeholder='Any special notes here...'
                value={specialNotes} 
                onChange={handleSpecialNotesText}  
            />
            <h3>Total Amount:PKR{totalAmount}</h3>
            <button style={{height:'40px',width:'170px',backgroundColor:'green',margin:'auto'}}onClick={sendToBackend}>Confirm Your Order</button>
             <button onClick={clear} className='clear-cart'>Clear Cart</button></>}
        </div>
    );
}

export default CartItem;
