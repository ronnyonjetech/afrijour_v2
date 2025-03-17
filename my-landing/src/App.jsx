
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Testimonial from './pages/Testimonial'
import Map from './pages/Map';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Trial from './pages/Trial';
import Impact from './pages/Impact';
import Research from './pages/Research';
import Conferences from './pages/Conferences';
import { LanguageProvider } from './contexts/LanguageContext';
import Fund from './pages/Fund';
function App() {
  

  return (
    // <>
    //   <Home/>
    //   {/* <Testimonial/> */}
    // </>
    <LanguageProvider>
    <Router>
     
      <Routes>
        <Route index element={<Home />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="map" element={<Map />} />
        <Route path="about" element={<About/>}/>
        <Route path="faqs" element={<Faqs/>}/>
        <Route path="trials" element={<Trial/>}/>
        <Route path="impact" element={<Impact/>}/>
        <Route path="research" element={<Research/>}/>
        <Route path="conference" element={<Conferences/>}/>
        <Route path="funds" element={<Fund/>}/>
      </Routes>
      
    </Router></LanguageProvider>
  )
}

export default App
