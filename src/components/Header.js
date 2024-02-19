import React from 'react';
import TrollFaceImage from './images/troll-face.png'; 

export default function Header() {
    return (
        <header className='header'>
            <img src={TrollFaceImage} className="header--image" alt="Troll Face" />
            <h2 className='header--title'>MemeGenerator</h2>
            <h4 className='header--project'>React course-project</h4>
        </header>
    );
}
