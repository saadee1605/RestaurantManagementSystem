import React from 'react';
import '../CSS/DisplayCategory.css';

const DisplayCategory = (props) => {
    // Function to capitalize the first letter of each word
    const capitalizeWords = (text = '') => {
        return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className='dc'>
            <img src={props.image} alt="" />
            <p>{capitalizeWords(props.text)}</p>
            <p>{capitalizeWords(props.category)}</p>
        </div>
    );
};

export default DisplayCategory;
