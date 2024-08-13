import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Home from './Components/Pages/Home';
import HomeFolder from './Components/Pages/HomeFolder';
import { Routes, Route } from 'react-router-dom';
import BestPractices from './Components/Pages/BestPractices';

function App() {
  return (
    <div>
      
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BestPractice" element={<BestPractices/>}/>
        <Route path ="/HomeFolder" element={<HomeFolder/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
