import './App.css';
import * as api from "./Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from './components/CharityComponets';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Home from './pages/Home';
import Businesses from './pages/Businesses';
import Charities from './pages/Charities';
import Resources from './pages/Resources';

import Navbar from './components/NavBar';
function App() {
  useEffect(() => {

  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Businesses" element={<Businesses />} />
        <Route path="/Charities" element={<Charities />} />
        <Route path="/Resources" element={<Resources />} />




      </Routes>

    </div>)
}

export default App;
