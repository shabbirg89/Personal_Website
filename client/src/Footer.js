// Footer.js
import React from 'react';

const Footer = ({ linkedin, github, youtube }) => {
  return (
    <footer className="footer">
      <p>© 2023 Shabbir Governor</p>
      <p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        |{' '}
        <a href={youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>{' '}
        | <a href={`mailto:shabbirg89@gmail.com`}>Email</a>
      </p>
    </footer>
  );
};

export default Footer;