import React from 'react';
import './App.css';
import profileImage from './profile.jpg';
import video1Thumbnail from './assets/video1_thumbnail.jpg';
import video2Thumbnail from './assets/video2_thumbnail.jpg';
import video3Thumbnail from './assets/video3_thumbnail.jpg';
import video4Thumbnail from './assets/video4_thumbnail.jpg';
import video5Thumbnail from './assets/video5_thumbnail.jpg';
import video6Thumbnail from './assets/video6_thumbnail.jpg';
import video7Thumbnail from './assets/video7_thumbnail.jpg';
import video8Thumbnail from './assets/video8_thumbnail.jpg';
import video9Thumbnail from './assets/video9_thumbnail.jpg';
import video10Thumbnail from './assets/video10_thumbnail.jpg';
import video11Thumbnail from './assets/video11_thumbnail.jpg';
import video12Thumbnail from './assets/video12_thumbnail.jpg';
import video13Thumbnail from './assets/video13_thumbnail.jpg';
import video14Thumbnail from './assets/video14_thumbnail.jpg';

const playlists = [
  {
    id: 1,
    name: 'MySQL playlist for Beginners',
    videos: [
      {
        id: 1,
        title: '42 videos',
        description: `Join our comprehensive MySQL tutorial playlist and master the world of database management. From basic CRUD operations to advanced topics like joins and stored procedures, gain practical skills to design and manage robust databases. Perfect for beginners and professionals alike. Let's dive into MySQL and unlock its full potential together!`,
        thumbnail: video1Thumbnail,
        youtubeLink: 'https://youtu.be/83IHr2fQ2Rs',
      },
      // Add more video objects for the first playlist
    ],
  },
  {
    id: 2,
    name: 'Python Tutorials for Beginners',
    videos: [
      {
        id: 1,
        title: '107 videos',
        description: `Embark on a Python programming journey with our comprehensive tutorial playlist. Whether you're a beginner or an experienced programmer, this playlist is tailored to expand your Python skills. From fundamental concepts to advanced topics like object-oriented programming and data manipulation, we cover it all. Get hands-on with practical examples and exercises, empowering you to write efficient and powerful Python code. Join us and unleash the full potential of Python in your programming endeavors. Let's dive into Python together!`,
        thumbnail: video2Thumbnail,
        youtubeLink: 'https://youtu.be/CzgWuaO4iU8',
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
        title: '21 videos',
        description: `Explore the world of Java programming with our comprehensive tutorial playlist. Whether you're new to coding or an experienced developer, this playlist is designed to enhance your Java skills. From the basics of syntax and control flow to advanced topics such as object-oriented programming and exception handling, we've got you covered. Dive into practical examples and exercises that will sharpen your Java proficiency. Join us on this learning journey and unlock the full potential of Java in your programming endeavors. Let's dive into Java together!`,
        thumbnail: video3Thumbnail,
        youtubeLink: 'https://youtu.be/6oEXW_EvPiY',
      },
      // Add more video objects for the third playlist
    ],
  },
  {
    id: 4,
    name: 'AS400/IBM i Tutorials for Beginners',
    videos: [
      {
        id: 1,
        title: '29 videos',
        description: `Embark on a journey to master AS400 RPG and COBOL programming with our comprehensive tutorial playlist. Whether you're a beginner or experienced developer, this playlist is tailored to enhance your skills in these powerful languages. From the fundamentals of AS400 RPG and COBOL syntax to advanced topics like file handling and program optimization, we cover it all. Dive into practical examples and exercises to gain hands-on experience and sharpen your abilities. Join us on this learning adventure and unlock the full potential of AS400 RPG and COBOL in your programming endeavors. Let's dive into AS400 RPG and COBOL together!`,
        thumbnail: video4Thumbnail,
        youtubeLink: 'https://youtu.be/6oEXW_EvPiY',
      },
      // Add more video objects for the fourth playlist
    ],
  },
  {
    id: 5,
    name: 'PySPARK Tutorials for Beginners to Advance',
    videos: [
      {
        id: 1,
        title: '10 videos',
        description: `
        Embark on a PySpark tutorial playlist and unlock the power of big data processing with Python. Whether you're a beginner or an experienced data professional, this playlist is designed to enhance your PySpark skills. From the basics of distributed computing and data transformation to advanced topics like machine learning and data streaming, we cover it all. Dive into practical examples and exercises to gain hands-on experience with PySpark's powerful capabilities. Join us on this learning journey and harness the full potential of PySpark in your big data projects. Let's dive into PySpark together!`,
        thumbnail: video5Thumbnail,
        youtubeLink: 'https://youtu.be/AB2nUrKYRhw',
      },
      // Add more video objects for the fifth playlist
    ],
  },
  {
    id: 6,
    name: 'R programming Tutorials for Beginners to Advance',
    videos: [
      {
        id: 1,
        title: '12 videos',
        description: `Embark on a comprehensive R programming tutorial playlist and unlock the potential of statistical computing and data analysis. Whether you're a beginner or an experienced data scientist, this playlist is tailored to enhance your R skills. From the basics of data manipulation and visualization to advanced topics like statistical modeling and machine learning, we cover it all. Dive into practical examples and exercises to gain hands-on experience and sharpen your abilities in R programming. Join us on this learning journey and harness the full potential of R in your data-driven projects. Let's dive into R programming together!`,
        thumbnail: video6Thumbnail,
        youtubeLink: 'https://youtu.be/cqJ5bgJh1lM',
      },
      // Add more video objects for the sixth playlist
    ],
  },
  {
    id: 7,
    name: 'MS EXCEL for Beginners',
    videos: [
      {
        id: 1,
        title: '4 videos',
        description: `Embark on a comprehensive R programming tutorial playlist and unlock the potential of statistical computing and data analysis. Whether you're a beginner or an experienced data scientist, this playlist is tailored to enhance your R skills. From the basics of data manipulation and visualization to advanced topics like statistical modeling and machine learning, we cover it all. Dive into practical examples and exercises to gain hands-on experience and sharpen your abilities in R programming. Join us on this learning journey and harness the full potential of R in your data-driven projects. Let's dive into R programming together!`,
        thumbnail: video7Thumbnail,
        youtubeLink: 'https://youtu.be/hOVxvOFXx3Q',
      },
      // Add more video objects for the seventh playlist
    ],
  },
  {
    id: 8,
    name: 'ChatGPT/LLM tutorial for Beginners with Python',
    videos: [
      {
        id: 1,
        title: '8 videos',
        description: `Embark on a comprehensive Large Language Model (LLM) tutorial playlist and dive into the world of advanced natural language processing and artificial intelligence. Whether you're a researcher, developer, or language enthusiast, this playlist is tailored to enhance your understanding and usage of large language models. From the basics of LLM architecture and training to advanced topics like fine-tuning and transfer learning, we cover it all. Explore practical examples and hands-on exercises to gain expertise in generating human-like text and language understanding. Join us on this learning journey and unlock the full potential of large language models in your AI projects. Let's dive into LLM together!`,
        thumbnail: video8Thumbnail,
        youtubeLink: 'https://youtu.be/BB--sfneIaY',
      },
      // Add more video objects for the eighth playlist
    ],
  },
  {
    id: 9,
    name: 'Github tutorial for Beginners',
    videos: [
      {
        id: 1,
        title: '5 videos',
        description: `GitHub Playlist on YouTube offers a curated collection of videos showcasing innovative projects, coding tutorials, and software development insights. Dive into the world of open-source collaboration, version control, and programming languages while learning from industry experts and exploring the vast GitHub ecosystem. Expand your coding skills and stay up-to-date with the latest trends in software development through this engaging playlist.`,
        thumbnail: video9Thumbnail,
        youtubeLink: 'https://youtu.be/BB--sfneIaY',
      },
      // Add more video objects for the ninth playlist
    ],
  },
  {
    id: 10,
    name: 'FLASK Framework tutorial for Beginners',
    videos: [
      {
        id: 1,
        title: '8 videos',
        description: `Explore the power of Flask with our concise YouTube playlist. From building simple web applications to integrating databases and implementing authentication, this beginner-friendly tutorial series covers the essentials of Flask development. Join us and unlock the potential of Flask for your web projects!`,
        thumbnail: video10Thumbnail,
        youtubeLink: 'https://youtu.be/uU8-Ik8rxuw',
      },
      // Add more video objects for the ninth playlist
    ],
  },
  {
    id: 11,
    name: 'Machine Learning/Deep Learning Projects for Beginners',
    videos: [
      {
        id: 1,
        title: '33 videos',
        description: `Dive into the world of Machine Learning and Deep Learning with our comprehensive YouTube playlist. From understanding the fundamentals of ML/DL algorithms to implementing advanced models and techniques, this playlist is designed to enhance your skills in AI. Explore practical examples, hands-on projects, and stay up-to-date with the latest advancements in ML/DL. Let's embark on this learning journey and unlock the full potential of ML/DL in your projects!`,
        thumbnail: video11Thumbnail,
        youtubeLink: 'https://youtu.be/tHI9mhxzhMM',
      },
      // Add more video objects for the ninth playlist
    ],
  },
  {
    id: 12,
    name: 'Natural language processing tutorial for Beginners',
    videos: [
      {
        id: 1,
        title: '8 videos',
        description: `Embark on a journey into Natural Language Processing (NLP) with our comprehensive YouTube playlist. Whether you're a researcher, developer, or language enthusiast, this playlist is tailored to enhance your understanding and application of NLP techniques. From basic concepts like text preprocessing and sentiment analysis to advanced topics such as language modeling and neural machine translation, we cover it all. Join us on this learning adventure and unlock the full potential of NLP in your projects!`,
        thumbnail: video12Thumbnail,
        youtubeLink: 'https://youtu.be/YC7L61vNeN4',
      },
      // Add more video objects for the ninth playlist
    ],
  },
  {
    id: 13,
    name: 'Tableau crash course for Beginners',
    videos: [
      {
        id: 1,
        title: '4 videos',
        description: `Dive into Tableau with our crash course playlist and unleash your data visualization skills. Whether you're a beginner or an experienced analyst, this playlist is designed to enhance your Tableau proficiency. From the fundamentals of data connections and visualization techniques to advanced features like calculations and interactive dashboards, we cover it all. Join us on this accelerated learning journey and master Tableau for impactful data storytelling and analysis.`,
        thumbnail: video13Thumbnail,
        youtubeLink: 'https://youtu.be/znFkHXw58cU',
      },
      // Add more video objects for the ninth playlist
    ],
  },
  {
    id: 14,
    name: 'Power BI crash course for Beginners',
    videos: [
      {
        id: 1,
        title: '2 videos',
        description: `Embark on a Power BI crash course playlist and unlock the power of data analysis and visualization. Whether you're a beginner or an experienced data professional, this playlist is tailored to enhance your Power BI skills. From connecting to data sources and creating compelling visualizations to advanced topics like data modeling and interactive reports, we cover it all. Join us on this accelerated learning journey and harness the full potential of Power BI in your data-driven projects.`,
        thumbnail: video14Thumbnail,
        youtubeLink: 'https://youtu.be/22zDN8gi2Rc',
      },
      // Add more video objects for the ninth playlist
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
        <h2>My Mission:</h2>
        <p>{aboutMe.description}</p>
        <p>Check out my latest videos:</p>
      </div>
      <div>
        <h2>Basic Playlists:</h2>
        {playlists
          .filter((playlist) => playlist.id <= 3)
          .map((playlist) => (
            <div key={playlist.id}>
              <h3>{playlist.name}</h3>
              {playlist.videos.map((video) => (
                <div key={video.id} className="video-container">
                  <img src={video.thumbnail} alt="Video Thumbnail" />
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <div className="links">
                    <a
                      href={video.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
      <div>
        <h2>Advanced Playlists:</h2>
        {playlists
          .filter((playlist) => playlist.id > 3 & playlist.id < 13)
          .map((playlist) => (
            <div key={playlist.id}>
              <h3>{playlist.name}</h3>
              {playlist.videos.map((video) => (
                <div key={video.id} className="video-container">
                  <img src={video.thumbnail} alt="Video Thumbnail" />
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <div className="links">
                    <a
                      href={video.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>

      <div>
        <h2>Analytics tools Playlists:</h2>
        {playlists
          .filter((playlist) => playlist.id > 12)
          .map((playlist) => (
            <div key={playlist.id}>
              <h3>{playlist.name}</h3>
              {playlist.videos.map((video) => (
                <div key={video.id} className="video-container">
                  <img src={video.thumbnail} alt="Video Thumbnail" />
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <div className="links">
                    <a
                      href={video.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>

      <footer className="footer">
        <p>© 2023 Shabbir Governor</p>
        <p>
          <a href={aboutMe.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href={aboutMe.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <a href={aboutMe.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>{' '}
          | <a href={`mailto:shabbirg89@gmail.com`}>Email</a>
        </p>
      </footer>
    </div>
  );
}

export default App;