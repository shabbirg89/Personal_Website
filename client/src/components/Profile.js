// Profile.js
import React from 'react';
import profileImage from '../assets/profile.jpg';
import '../styles/Profile.css'; // Import the CSS file for the component

const Profile = ({ name }) => {
  return (
    <div id="home" className="profile-section">
      <div className="profile-background" />
      <img src={profileImage} alt="Profile" className="profile-image fade-in" />
      <h1 className="slide-in">{name}</h1>
    </div>
  );
};

export default Profile;