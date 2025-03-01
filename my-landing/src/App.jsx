
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Testimonial from './pages/Testimonial'
import Map from './pages/Map';
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
      </Routes>
      
    </Router>
  )
}

export default App
