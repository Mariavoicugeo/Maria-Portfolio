import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import IntroPage from "./components/introPage/IntroPage";
import MainPage from "./components/mainPage/MainPage";

function App() {
 

 
  return (
    <Router>
    
        <Routes>
          {/* IntroPage is separate */}
          <Route path="/" element={<IntroPage />} />
          {/* MainPage wraps the other pages */}
          <Route path="/*" element={<MainPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;