
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Testimonial from './pages/Testimonial'
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
      </Routes>
      
    </Router>
  )
}

export default App
