import React from 'react';
import './App.css';
import profileImage from './profile.jpg';
import video1Thumbnail from './assets/video1_thumbnail.jpg';
import video2Thumbnail from './assets/video2_thumbnail.jpg';
import video3Thumbnail from './assets/video3_thumbnail.jpg';
import video4Thumbnail from './assets/video4_thumbnail.jpg';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    description: 'LLM VIDEO 1',
    thumbnail: video1Thumbnail,
    youtubeLink: 'https://www.youtube.com/watch?v=VE57ogCcqb8&t=15s',
    githubLink: 'https://github.com/yourname/video1',
  },
  // Add more video objects following the same structure
  {
    id: 2,
    title: 'Video 2',
    description: 'LLM video 2',
    thumbnail: video2Thumbnail,
    youtubeLink: 'https://www.youtube.com/watch?v=VE57ogCcqb8&t=15s',
    githubLink: 'https://github.com/yourname/video1',
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'LLM video 3',
    thumbnail: video3Thumbnail,
    youtubeLink: 'https://www.youtube.com/watch?v=VE57ogCcqb8&t=15s',
    githubLink: 'https://github.com/yourname/video1',
  },
  {
    id: 4,
    title: 'Video 4',
    description: 'Description of Video 4',
    thumbnail: video4Thumbnail,
    youtubeLink: 'https://www.youtube.com/watch?v=VE57ogCcqb8&t=15s',
    githubLink: 'https://github.com/yourname/video1',
  },
];

const aboutMe = {
  name: 'Shabbir Governor',
  description:
    'As a highly skilled and seasoned data science professional with over 4+ years of experience, I leverage my expertise in Generative AI, machine learning/deep learning, and natural language processing to enhance the predictive capabilities of software products. I have a diverse background in the Insurtech and AdTech domains and have hands-on experience with a variety of open source tools and algorithms in the ML/DL field. My commitment to staying up-to-date with the latest industry trends is demonstrated through my active engagement with the tech community, including running a YouTube channel that features technical topics.',
  linkedin: 'https://www.linkedin.com/in/shabbir-governor-442842154/',
  github: 'https://github.com/shabbirg89',
  youtube: 'https://www.youtube.com/channel/UCmKYzVoMFhr3yjhOsw3SqGQ',
};

const playlist = 'Latest Playlist';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href={aboutMe.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={aboutMe.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={aboutMe.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a href={`mailto:shabbirg89@gmail.com`}>Email</a>
          </li>
        </ul>
      </nav>
      <div id="home">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>SHABBIR GOVERNOR</h1>
      </div>
      <div className="about-me" id="about-me">
        <h2>About Me</h2>
        <p>{aboutMe.description}</p>
        <p>Check out my latest videos from the {playlist}:</p>
      </div>
      {videos.map((video) => (
        <div key={video.id} className="video-container">
          <img src={video.thumbnail} alt="Video Thumbnail" />
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <div className="links">
            <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
            <a href={video.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;