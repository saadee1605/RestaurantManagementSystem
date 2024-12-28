import React, { useState, useEffect } from 'react';
import image1 from '../../../Assets/barbeque.jpeg';
import image2 from '../../../Assets/chocolate_cake.jpg';
import image3 from '../../../Assets/egfrrice.jpg';
import image4 from '../../../Assets/fast food.jpeg';
import image5 from '../../../Assets/garlic_bread.jpg';

import image6 from '../../../Assets/food1.webp';
import image7 from '../../../Assets/food2.webp';

import '../CSS/AboutRestaurant.css';

const pictures = [
    { id: 1, image: image1, text: 'Delicious Barbeque, grilled to perfection!' },
    { id: 2, image: image2, text: 'Indulge in our rich and creamy Chocolate Cake.' },
    { id: 3, image: image3, text: 'Savor the flavor of our Egg Fried Rice.' },
    { id: 4, image: image4, text: 'Quick bites of your favorite Fast Food.' },
    { id: 5, image: image5, text: 'Taste the goodness of our Garlic Bread.' },
];

const AboutRestaurant = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='about-restaurant'>
            <div className="center-res">
                {/* <img src={image6} alt={`Dish ${currentIndex + 1}`} /> */}
                <p className='abour-p'>
                    <div style={{ fontSize: '80px' }}>About Our {props.restaurant} Restaurant</div>
                    <div style={{ fontSize: '20px' }}>
                        Where culinary passion meets local flavors. We specialize in delectable dishes crafted from fresh, locally sourced ingredients.
                    </div>
                    <div style={{ fontSize: '20px' }}>
                        Our dedicated team is committed to providing a memorable dining experience for every guest.
                    </div>
                    <div style={{ fontSize: '20px' }}>
                        Join us for a taste of our signature dishes in a warm and inviting atmosphere!
                    </div>
                </p>
            </div>
        </div>
    );
};

export default AboutRestaurant;
