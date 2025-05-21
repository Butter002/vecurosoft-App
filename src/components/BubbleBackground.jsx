import React from 'react';
import './BubbleBackground.css';

const BubbleBackground = () => {
  return (
    <div id="background-wrap">
      {[...Array(10)].map((_, index) => (
        <div className={`bubble x${index + 1}`} key={index}></div>
      ))}
    </div>
  );
};

export default BubbleBackground;
