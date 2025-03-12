
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Testimonial from './pages/Testimonial'
import Map from './pages/Map';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Trial from './pages/Trial';
import Impact from './pages/Impact';
function App() {
  

  return (
    // <>
    //   <Home/>
    //   {/* <Testimonial/> */}
    // </>
    <Router>
     
      <Routes>
        <Route index element={<Home />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="map" element={<Map />} />
        <Route path="about" element={<About/>}/>
        <Route path="faqs" element={<Faqs/>}/>
        <Route path="trials" element={<Trial/>}/>
        <Route path="impact" element={<Impact/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
