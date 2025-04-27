import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import IntroPage from "./components/introPage/IntroPage";
import MainPage from "./components/mainPage/MainPage";
import { BrowserRouter } from 'react-router-dom';
function App() {
 

 
  return (
    <BrowserRouter basename="/Maria-Portfolio">
    
    
        <Routes>
          {/* IntroPage is separate */}
          <Route path="/" element={<IntroPage />} />
          {/* MainPage wraps the other pages */}
          <Route path="/*" element={<MainPage />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;