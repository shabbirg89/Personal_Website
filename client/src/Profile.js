// Profile.js
import React from 'react';
import profileImage from './profile.jpg';

const Profile = ({ name }) => {
  return (
    <div id="home">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>{name}</h1>
    </div>
  );
};

export default Profile;