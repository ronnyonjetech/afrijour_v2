
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext'; // Import the context
import Waves from './Waves';
import './AnimatedText.css';

const Video = () => {
  const { translations } = useContext(LanguageContext); // Get translations from context
  const messages = [
    // translations.welcome_message,
    translations.journal_indexing,
    translations.showcase_conferences,
    translations.showcase_workshops,
    translations.showcase_funding,
    translations.african_journals_visible,
    translations.african_research_light,
  ]; // Use translated text instead of hardcoded English text

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
  }, [charIndex, erasing, messageIndex, messages]);

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
          src="/hero.mp4"
          className="video-element"
          aria-label="Background video showcasing Afrikajournal visibility"
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
    // <>
    // <video
    //       autoPlay
    //       loop
    //       muted
    //       playsInline
    //       preload="auto"
    //       poster="https://cdn.shortpixel.ai/spai/q_lossy+w_1334+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/default-bg.jpg"
    //       src="https://agra.org/wp-content/themes/agra/assets/videos/agra-002-1.mp4"
    //       className="video-element"
    //       aria-label="Background video showcasing AGRA initiatives"
    //     />
    //     <Waves />
    // </>
  );
};

export default Video;
