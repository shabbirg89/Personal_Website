// VideoList.js
import React from 'react';

const VideoList = ({ playlists }) => {
  return (
    <div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h3>{playlist.name}</h3>
          {playlist.videos.map((video) => (
            <div key={video.id} className="video-container">
              <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt="Video Thumbnail" />
              </a>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              <div className="links">
                <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VideoList;