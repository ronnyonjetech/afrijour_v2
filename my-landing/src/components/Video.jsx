import React from 'react';
import AboutSection from './AboutSection';
import Waves from './Waves';
const Video = () => {
  return (
    <header className="main-header">
      <div className="home-video-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.shortpixel.ai/spai/q_lossy+w_1334+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/default-bg.jpg"
          src="https://agra.org/wp-content/themes/agra/assets/videos/agra-002-1.mp4"

          style={{
            width: "1334px",
            height: "652px",
            maxWidth: "100%",
            objectFit: "cover"
          }}
        />
        <div className="home-video-bg-cover"></div>
        <Waves/>
      </div>
      
    </header>
  );
};

export default Video;
