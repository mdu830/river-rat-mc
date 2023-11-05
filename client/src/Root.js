import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import HomePage from './routes/HomePage';
import Services from './routes/Services'
import Testimonials from './routes/Testimonials'
import Gallery from './routes/Gallery';
import GalleryImg from './components/ImgGallery';
import About from './routes/About'
import Contact from './routes/Contact'
import Faq from './routes/Faq'
import ScrollReset from './components/ScrollReset';

export default function Root() {

  const location = useLocation()

  return (
    <div className="App">
      <ScrollReset />
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route ref='home' index path="/" element={<HomePage />} />
        <Route ref='serv' path="/services" element={<Services />} />
        <Route ref='test' path="/testimonials" element={<Testimonials />} />
        <Route ref='gall' path="/gallery" element={<Gallery data={GalleryImg} />} />
        <Route ref='abou' path="/about" element={<About />} />
        <Route ref='cont' path="/contact" element={<Contact />} />
        {/* <Route ref='faq' path="/faq" element={<Faq />} /> */}
      </Routes>
      <SubFooter />
      <Footer />
    </div>
  )

}
