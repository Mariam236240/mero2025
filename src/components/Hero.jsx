import React from 'react';
import '../css/Home.css'

import basicsImg from '../imags/6pm-80.webp';
import womenImg from '../imags/241005_6PM_CAMPAIGN_LOOK_11_230.webp';
import sportsImg from '../imags/250715_6PM_LOOK_04_1626.webp';


import bg1 from '../imags/6pm-80.webp';
import bg2 from '../imags/241005_6PM_CAMPAIGN_LOOK_11_230.webp';
import bg3 from '../imags/250715_6PM_LOOK_04_1626.webp';

export default function Hero() {
  const heroCards = [
    { img: basicsImg, title: 'BASICS', alt: 'Basics category' },
    { img: womenImg, title: 'WOMEN', alt: 'Women category' },
    { img: sportsImg, title: 'SPORTS', alt: 'Sports category' },
  ];

  const bgImages = [bg1, bg2, bg3]; 

  return (
    <section className="hero">
      <div className="scrolling-background">
        {bgImages.concat(bgImages).map((bg, i) => (
          <img src={bg} alt={`background ${i}`} key={i} />
        ))}
      </div>

      <div className="cards-container">
        {heroCards.map(({ img, title, alt }, index) => (
          <div className="hero-card" key={index}>
          <img src={img} alt={alt} style={{ height: "300px", objectFit: "cover" }} />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
