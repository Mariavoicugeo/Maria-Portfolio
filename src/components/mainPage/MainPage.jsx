import React from 'react'
import MainNavBar from '../mainNavBar/MainNavBar'
import About from '../about/About'
import { Route, Routes } from "react-router-dom";
import Proiecte from "../proiecte/Proiecte"
import ScrollToTop from '../../reactBits/ScrollToUp';
import ContactForm from '../contact/Contact';
export default function MainPage() {
  return (
    <div>
      {/* MainNavBar is always visible here */}
      <MainNavBar />
    <ScrollToTop/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/proiecte" element={<Proiecte />} />
       <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
    </div>
  )
}
