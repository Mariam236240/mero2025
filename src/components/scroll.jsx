import React from 'react';
import '../components/Home.css';

export default function ScrollBackground() {
  return (
    <div className="scroll-wrapper">
      <div className="scrolling-background">
        {/* You can repeat images or use a wide background */}
        <img src="/path-to-your-image1.webp" alt="bg1" />
        <img src="/path-to-your-image2.webp" alt="bg2" />
        <img src="/path-to-your-image1.webp" alt="bg1" />
        <img src="/path-to-your-image2.webp" alt="bg2" />
      </div>

      <div className="content">
        {/* Your actual page content here */}
        <h1>BLACK WEEK COLLECTION</h1>
      </div>
    </div>
  );
}
