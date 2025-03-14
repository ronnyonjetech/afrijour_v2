
// import React from 'react';
// import Waves from './Waves';

// const Video = () => {
//   return (
//     <header className="main-header">
//       <div className="home-video-bg">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           poster="https://cdn.shortpixel.ai/spai/q_lossy+w_1334+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/default-bg.jpg"
//           src="https://agra.org/wp-content/themes/agra/assets/videos/agra-002-1.mp4"
//           className="video-element"
//           aria-label="Background video showcasing AGRA initiatives"
//         />
//         <div className="home-video-bg-cover"></div>
//         <Waves />
//       </div>
//     </header>
//   );
// };

// export default Video;

import React, { useState, useEffect } from 'react';
import Waves from './Waves';
import './AnimatedText.css'; // Ensure you create this CSS file

const messages = [
  "Welcome to Afrika Journal Platform",
  "We do journal indexing",
  "We showcase various conferences",
  "We showcase various Workshops",
  "We showcase various funding opportunities",
  "We make African journals visible",
  "We bring African Research to Light"
];

const Video = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (!erasing && charIndex < messages[messageIndex].length) {
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else if (!erasing && charIndex === messages[messageIndex].length) {
      setTimeout(() => setErasing(true), 2000);
    }
  }, [charIndex, erasing, messageIndex]);

  useEffect(() => {
    if (erasing && text.length > 0) {
      const eraseTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 100);
      return () => clearTimeout(eraseTimeout);
    } else if (erasing && text.length === 0) {
      setTimeout(() => {
        setErasing(false);
        setCharIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 500);
    }
  }, [text, erasing]);

  return (
    <header className="main-header">
      <div className="home-video-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://cdn.shortpixel.ai/spai/q_lossy+w_1334+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/default-bg.jpg"
          src="https://agra.org/wp-content/themes/agra/assets/videos/agra-002-1.mp4"
          className="video-element"
          aria-label="Background video showcasing AGRA initiatives"
        />
        <div className="home-video-bg-cover">
          <div className="animated-text">
            {text}
            {showCursor && <span className="cursor">|</span>}
          </div>
        </div>
        <Waves />
      </div>
    </header>
  );
};

export default Video;
