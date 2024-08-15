import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import HomeFolder from './Components/Pages/HomeFolder';
import { Routes, Route } from 'react-router-dom';
import BestPractices from './Components/Pages/BestPractices';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeFolder" element={<HomeFolder />} />
        <Route path="/BestPractice" element={<BestPractices />} />
      </Routes>
    </div>
  );
}

export default App;
