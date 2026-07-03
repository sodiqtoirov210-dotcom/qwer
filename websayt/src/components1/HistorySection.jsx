import React from 'react';
import schoolgirlImg from '../assets/schoolgril.png';
import hendImg from '../assets/hend.png';
import womenImg from '../assets/women.png';

export default function HistorySection() {
    const images = [schoolgirlImg, hendImg, womenImg, schoolgirlImg, womenImg];
    
    return (
        <div className="history">
        <div className="matn">История последних новостей</div>
        <div className="istory">
            {images.map((src, index) => (
            <div className="img-ring" key={index}>
                <img src={src} alt="" />
            </div>
            ))}
        </div>
        </div>
    );
}