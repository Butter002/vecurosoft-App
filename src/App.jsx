// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Servicepage from './pages/service'
import Page404 from './pages/404Page'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path='Service' element={< Servicepage/>}/>
        <Route path='AboutUs' element={<AboutUs/>} />
        <Route path='*' element={<Page404 />}/>
        
        {/* Add more routes here later */}

      </Routes>
    </Router>
  );
};

export default App;
