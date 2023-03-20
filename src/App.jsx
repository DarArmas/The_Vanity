import React from 'react';
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { LocationPage } from './pages/LocationPage';
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/LocationPage" element={<LocationPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
