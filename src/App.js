import './App.css';
import * as api from "./Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from './components/CharityComponets';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/NavBar';
function App() {
  useEffect(() => {

  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>

    </div>)
}

export default App;
