import React from 'react';
import '../CSS/Special.css';
import Display from './DisplayCategory.jsx'; // Removed duplicate import
import pictures from '../../../Assets/specials.js';

const SpecialFoods = () => {
  return (
    <div className='special'>
      {/* <hr /> */}
      <div className='qqwwee'>
        <h1 className='specioalheading'>Specials</h1>
        <div className='ss'>
          {

            pictures.map((item, index) => (
              <Display key={index}  image={item.image} text={item.text} />
            ))
          }
        </div>
      </div>
<hr />
    </div>
  );
}

export default SpecialFoods;
