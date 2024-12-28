import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../../Assets/6320525_Grill_Barbecue_3840x2160.mp4'; // Make sure the path is correct
import '../CSS/Hero.css';

const Hero = (props) => {
    return (
        <div className='Hero'>
            <div className='video-container'>
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-background"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className='content'>
                    <h1>Welcome to {props.restaurant} Paradise</h1>
                    <p>Experience a culinary journey like no other! Indulge in our delicious dishes made with fresh ingredients and love.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
