import React from 'react';
import Menu from '../../../Pages/JSX/Menu';

const RelatedProducts = (props) => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Related Products</h1>
      {/* Pass setItem function to Menu */}
      <Menu category={props.category} setItem={props.setItem} />
    </div>
  );
}

export default RelatedProducts;
