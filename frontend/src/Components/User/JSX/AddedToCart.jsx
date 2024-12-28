import React, { useState } from 'react'
import '../CSS/addedToCart.css'
const AddedToCart = (props) => {
    return (
        props.message&&
        <div className='addedToCart'>
          <h3>{props.message}</h3>
        </div>
    )
}

export default AddedToCart
