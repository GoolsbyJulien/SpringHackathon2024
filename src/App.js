import './App.css';
import * as api from "./Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from './components/CharityComponets';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
  useEffect(() => {

  }, []);
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />

    </Routes>);
}

export default App;
