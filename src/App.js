import './App.css';
import * as api from "./Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from './components/CharityComponets';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/HomePage';
import Home from './pages/Home';
import TaxCalculator from './pages/TaxCalculator.js';
import Charities from './pages/Charities';
import Resources from './pages/Resources';
import WhyDonate from './pages/WhyDonate';

import Navbar from './components/NavBar';
function App() {
  useEffect(() => {

  }, []);
  return (
    <div >
      <Navbar />

      <div style={{minHeight : "83vh"}}>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/TaxCalculator" element={<TaxCalculator />} />
          <Route path="/Charities" element={<Charities />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/WhyDonate" element={<WhyDonate />} />




        </Routes>

      </div>
      <div class="footer">
        <p>Spring 2024 Hackathon Project brought to you by the UCM Mules: Julien Goolsby, Evan Perlinger, Eric Price and Cooper Purvis ©  </p>
      </div>

    </div>)
}

export default App;
