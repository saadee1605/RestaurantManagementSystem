import React, { useEffect } from 'react';
import '../CSS/Categories.css';
import Display from './DisplayCategory'
import categories from '../../../Assets/categories/categories';
import { useNavigate } from 'react-router-dom';
const Categories = (props) => {
    const navigate = useNavigate();

    const hey=(item)=>{
        props.setItem(item.category);
        navigate('/categories')
    }
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    return (
        <div className='category'>
            <div className='cat-cat'>
                <h1 className='cat-head'>Categories</h1>
                <div className='inner-cont'>
                    {categories.map((item, index) => {
                        return (
                            <div onClick={()=>hey(item)}>
                            <Display key={index} image={item.image} text={item.category}/>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <hr /> */}
        </div>
    );
}

export default Categories;
