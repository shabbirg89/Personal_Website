// Navbar.js
import React from 'react';

const Navbar = ({ linkedin, github, youtube }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </li>
        <li>
          <a href={`mailto:shabbirg89@gmail.com`}>Email</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;