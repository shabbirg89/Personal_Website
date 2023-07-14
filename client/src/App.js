import React from 'react';
import './App.css';
import profileImage from './profile.jpg';
import video1Thumbnail from './assets/video1_thumbnail.jpg';
import video2Thumbnail from './assets/video2_thumbnail.jpg';
import video3Thumbnail from './assets/video3_thumbnail.jpg';
import video4Thumbnail from './assets/video4_thumbnail.jpg';
import video5Thumbnail from './assets/video5_thumbnail.jpg';

const playlists = [
  {
    id: 1,
    name: 'MySQL playlist for Beginners to Advance',
    videos: [
      {
        id: 1,
        title: 'MySQL playlist for Beginners to Advance',
        description: `Join our comprehensive MySQL tutorial playlist and master the world of database management. From basic CRUD operations to advanced topics like joins and stored procedures, gain practical skills to design and manage robust databases. Perfect for beginners and professionals alike. Let's dive into MySQL and unlock its full potential together!`,
        thumbnail: video1Thumbnail,
        youtubeLink: 'https://youtu.be/83IHr2fQ2Rs',
        //githubLink: 'https://github.com/yourname/video1',
      },
      // Add more video objects for the first playlist
    ],
  },
  {
    id: 2,
    name: 'Python Tutorials for Beginners to Advance',
    videos: [
      {
        id: 1,
        title: 'Python Tutorials for Beginners to Advance',
        description: `Embark on a Python programming journey with our comprehensive tutorial playlist. Whether you're a beginner or an experienced programmer, this playlist is tailored to expand your Python skills. From fundamental concepts to advanced topics like object-oriented programming and data manipulation, we cover it all. Get hands-on with practical examples and exercises, empowering you to write efficient and powerful Python code. Join us and unleash the full potential of Python in your programming endeavors. Let's dive into Python together!`,
        thumbnail: video2Thumbnail,
        youtubeLink: 'https://youtu.be/CzgWuaO4iU8',
        //githubLink: 'https://github.com/yourname/video1',
      },
    
      // Add more video objects for the second playlist
    ],
  },
  {
    id: 3,
    name: 'Java Tutorials for Beginners',
    videos: [
      {
        id: 1,
        title: 'Java Tutorials for Beginners to Advance',
        description: `Explore the world of Java programming with our comprehensive tutorial playlist. Whether you're new to coding or an experienced developer, this playlist is designed to enhance your Java skills. From the basics of syntax and control flow to advanced topics such as object-oriented programming and exception handling, we've got you covered. Dive into practical examples and exercises that will sharpen your Java proficiency. Join us on this learning journey and unlock the full potential of Java in your programming endeavors. Let's dive into Java together!`,
        thumbnail: video3Thumbnail,
        youtubeLink: 'https://youtu.be/6oEXW_EvPiY',
        //githubLink: 'https://github.com/yourname/video1',
      },
    
      // Add more video objects for the second playlist
    ],
  },
  {
    id: 4,
    name: 'AS400/IBM i Tutorials for Beginners',
    videos: [
      {
        id: 1,
        title: 'AS400 Tutorials for Beginners to Advance',
        description: `Embark on a journey to master AS400 RPG and COBOL programming with our comprehensive tutorial playlist. Whether you're a beginner or experienced developer, this playlist is tailored to enhance your skills in these powerful languages. From the fundamentals of AS400 RPG and COBOL syntax to advanced topics like file handling and program optimization, we cover it all. Dive into practical examples and exercises to gain hands-on experience and sharpen your abilities. Join us on this learning adventure and unlock the full potential of AS400 RPG and COBOL in your programming endeavors. Let's dive into AS400 RPG and COBOL together!`,
        thumbnail: video4Thumbnail,
        youtubeLink: 'https://youtu.be/6oEXW_EvPiY',
        //githubLink: 'https://github.com/yourname/video1',
      },
    
      // Add more video objects for the second playlist
    ],
  },
  {
    id: 5,
    name: 'PySPARK Tutorials for Beginners',
    videos: [
      {
        id: 1,
        title: 'PySPARK Tutorials for Beginners',
        description: `
        Embark on a PySpark tutorial playlist and unlock the power of big data processing with Python. Whether you're a beginner or an experienced data professional, this playlist is designed to enhance your PySpark skills. From the basics of distributed computing and data transformation to advanced topics like machine learning and data streaming, we cover it all. Dive into practical examples and exercises to gain hands-on experience with PySpark's powerful capabilities. Join us on this learning journey and harness the full potential of PySpark in your big data projects. Let's dive into PySpark together!`,
        thumbnail: video5Thumbnail,
        youtubeLink: 'https://youtu.be/AB2nUrKYRhw',
        //githubLink: 'https://github.com/yourname/video1',
      },
    
      // Add more video objects for the second playlist
    ],
  },
  // Add more playlist objects following the same structure
];

const aboutMe = {
  name: 'Shabbir Governor',
  description:
    'As a highly skilled and seasoned data science professional with over 4+ years of experience, I leverage my expertise in Generative AI, machine learning/deep learning, and natural language processing to enhance the predictive capabilities of software products. I have a diverse background in the Insurtech and AdTech domains and have hands-on experience with a variety of open source tools and algorithms in the ML/DL field. My commitment to staying up-to-date with the latest industry trends is demonstrated through my active engagement with the tech community, including running a YouTube channel that features technical topics.',
  linkedin: 'https://www.linkedin.com/in/shabbir-governor-442842154/',
  github: 'https://github.com/shabbirg89',
  youtube: 'https://www.youtube.com/channel/UCmKYzVoMFhr3yjhOsw3SqGQ',
};

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
        <p>Check out my latest videos:</p>
      </div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h2>{playlist.name}</h2>
          {playlist.videos.map((video) => (
            <div key={video.id} className="video-container">
              <img src={video.thumbnail} alt="Video Thumbnail" />
              <h3>{video.title}</h3>
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
      ))}
    </div>
  );
}

export default App;