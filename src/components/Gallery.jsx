import React from 'react';
import './Gallery.css';


import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2>Our Adventures</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img src={img} alt={`Everest Tour ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
