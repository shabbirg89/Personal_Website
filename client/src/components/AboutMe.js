// AboutMe.js
import React from 'react';

const AboutMe = ({ description }) => {
  return (
    <div className="about-me" id="about-me">
      <h2>My Mission:</h2>
      <p>{description}</p>
      <p>Check out my latest videos:</p>
    </div>
  );
};

export default AboutMe;