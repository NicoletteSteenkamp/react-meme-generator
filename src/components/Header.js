import React from 'react';
import TrollFaceImage from './images/troll-face.png'; 

export default function Header() {
    return (
        <header className='header'>
            <img src={TrollFaceImage} className="header--image" alt="Troll Face" />
            <h2 className='header--title'>MemeGenerator</h2>
            <h4>React Project-Coded by Nicolette Steenamp</h4>
            
        </header>
    );
}
