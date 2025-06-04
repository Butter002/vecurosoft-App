// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Servicepage from './pages/service'
import Page404 from './pages/404Page'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Page404 />}/>
        <Route path='Service' element={< Servicepage/>}/>
        {/* Add more routes here later */}

      </Routes>
    </Router>
  );
};

export default App;
