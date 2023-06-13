import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import HomePage from './routes/HomePage';
import About from './routes/About';
import Contact from './routes/Contact';
import ImgGallery from './routes/ImgGallery';
import QuoteRequest from './routes/QuoteRequest';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes render={({ location }) => (

          <Routes location={location}>
            <Route exact path={["/"]} component={HomePage} />
            <Route exact path={["/about"]} component={About.js} />
            <Route exact path={["/contact"]} component={Contact.js} />
            <Route exact path={["/quoterequest"]} component={QuoteRequest.js} />
            <Route exact path={["/imggallery"]} component={ImgGallery.js} />
          </Routes>

        )} />
      </div>
    </Router>

  );
}

export default App;
