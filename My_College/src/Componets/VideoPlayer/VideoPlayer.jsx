import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/LPU.mp4.MP4';

const VideoPlayer = ({ playState, setplayState }) => {
  const player = useRef(null);     // Ref for the video player container
  const videoRef = useRef(null);   // Ref for the video element

  const closePlayer = (e) => {
    if (e.target === player.current) {

      // Pause the video
      if (videoRef.current) {
        videoRef.current.pause();
      }
      // Hide the player
      setplayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
