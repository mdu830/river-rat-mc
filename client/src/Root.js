import './App.css';
import { Routes, Route, useLocation, Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from './components/header'
import Faq from './routes/Faq';
import HomePage from './routes/HomePage';
import Services from './routes/Services';
import Testimonials from './routes/Testimonials';
import Gallery from './routes/Gallery'
import About from './routes/About';
import Contact from './routes/Contact'
import Footer from './components/Footer';

export default function Root() {

  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )

}
