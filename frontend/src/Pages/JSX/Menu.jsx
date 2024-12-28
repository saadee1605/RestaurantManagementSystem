import React from 'react';
import Item from '../../Components/User/JSX/Item';
import starters from '../../Assets/starters/starters.js';
import chinese from '../../Assets/chinese/chinesecuisine.js';
import desserts from '../../Assets/desserts/desserts.js';
import drinks from '../../Assets/drinks and beverages/drinksandbeverages.js';
import pakistani from '../../Assets/pakistani cuisine/pakistanicuisine.js';
import '../CSS/Menus.css';
import { useEffect } from 'react';

const Menu = (props) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  const allMenuArray = [
    { title: 'starters', items: starters },
    { title: 'chinese', items: chinese },
    { title: 'desserts', items: desserts },
    { title: 'drinks', items: drinks },
    { title: 'pakistani', items: pakistani }
  ];

  const filteredMenu = props.category 
    ? allMenuArray.filter(menu => menu.title === props.category) 
    : allMenuArray; 
    const capitalizeWords = (text = '') => {
      return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  return (
    <div className='menu'>
      {filteredMenu.map((menu, index) => (
        <div key={index} className='menuie'>
          <h2 className='aasxasd' style={{ textAlign: 'center' ,fontSize:'50px'}}>{capitalizeWords(menu.title)}</h2>
          <div className="meu-items">
            {menu.items.map((elem, indexagain) => (
              <Item key={indexagain} elem={elem} setTheItem={props.setItem}></Item>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
