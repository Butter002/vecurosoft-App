import React from 'react';
import './BubbleBackground.scss';

const BubbleBackground = () => {
  return (
    <div className="bubble-section">
      <div id="background-wrap">
        {[...Array(10)].map((_, index) => (
          <div className={`bubble x${index + 1}`} key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default BubbleBackground;
