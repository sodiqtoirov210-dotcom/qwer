import React from 'react';
import womenImg from '../assets/women.png';
import schoolgirlImg from '../assets/schoolgril.png';
import hendImg from '../assets/hend.png';

export default function MainContent() {
    const images = [womenImg, schoolgirlImg, hendImg, womenImg];
    
    const boxes = Array(3).fill(null).map((_, boxIndex) => (
        <div className="box" key={boxIndex}>
        {images.map((src, imgIndex) => (
            <div className="inbox" key={imgIndex}>
            <img src={src} alt="" />
            <div className="inbox-content">
                <span className="inbox-date">18:26 11.02.2021 | 356</span>
                <p className="inbox-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.</p>
            </div>
            </div>
        ))}
        </div>
    ));
    
    return <div className="main">{boxes}</div>;
}