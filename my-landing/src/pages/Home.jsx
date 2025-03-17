
// import React, { useState, useEffect } from 'react';
// import Nav from '../components/Nav';
// import Video from '../components/Video';
// import Footer from '../components/Footer';
// import HeroSection from '../components/HeroSection';
// import StatisticsSection from '../components/StatisticsSection';
// import JournalSection from '../components/JournalSection/JournalSection';
// import Testimonials from '../Testi/Testimonials';
// import FAQ from '../components/FQ/FAQ';
// import Stats from '../Stats';
// import About from '../components/About1';
// import Map from './Map';
// import ReportsSection from '../components/ResearchSection/ResearchHub';
// import { MessageSquarePlus } from 'lucide-react';
// import FeedbackForm from '../components/FeedbackForm';

// const Home = () => {
//   const [showButton, setShowButton] = useState(false);
//   const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButton(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <Nav />
//       <Video />
//       <HeroSection style={{ marginBottom: '1050px' }} />
//       <StatisticsSection />
//       <About />
//       <JournalSection />
//       <Map />
//       <ReportsSection />
//       <Testimonials />
//       <FAQ />
//       <Footer />

     
//       {showButton && !isFeedbackOpen && (
//         <div className="position-fixed top-50 end-0 translate-middle-y z-3">
//           <button
//             className="btn btn-primary d-flex align-items-center gap-2 shadow-lg rounded-start px-4 py-3"
//             style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
//             onClick={() => setIsFeedbackOpen(true)}
//           >
//             <MessageSquarePlus size={20} />
//             Feedback
//           </button>
//         </div>
//       )}

     
//       {isFeedbackOpen && <FeedbackForm isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />}
//     </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Video from '../components/Video';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import JournalSection from '../components/JournalSection/JournalSection';
import Testimonials from '../Testi/Testimonials';
import FAQ from '../components/FQ/FAQ';
import Stats from '../Stats';
import About from '../components/About1';
import Map from './Map';
import ReportsSection from '../components/ResearchSection/ResearchHub';
import { MessageSquarePlus } from 'lucide-react';
import FeedbackForm from '../components/FeedbackForm';

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = document.getElementById('feedback-trigger');
      if (triggerPoint) {
        const triggerPosition = triggerPoint.getBoundingClientRect().top;
        setShowButton(triggerPosition < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav />
      <Video />
      <HeroSection style={{ marginBottom: '1050px' }} />

      <div id="feedback-trigger"></div> {/* This marks where feedback button should appear */}

      <StatisticsSection />
      <About />
      <JournalSection />
      <Map />
      <ReportsSection />
      <Testimonials />
      <FAQ />
      <Footer />

      {/* Feedback Button */}
      {showButton && !isFeedbackOpen && (
        <div className="position-fixed top-50 end-0 translate-middle-y z-3">
          <button
            className="btn btn-primary d-flex align-items-center gap-2 shadow-lg rounded-start px-4 py-3"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            onClick={() => setIsFeedbackOpen(true)}
          >
            <MessageSquarePlus size={20} />
            Feedback
          </button>
        </div>
      )}

      {/* Feedback Form */}
      {isFeedbackOpen && <FeedbackForm isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />}
    </>
  );
};

export default Home;
