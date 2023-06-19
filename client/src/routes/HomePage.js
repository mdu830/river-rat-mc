import React from 'react';
import '../assets/style.css'
import logo from '../assets/images/logo.png'


export default function HomePage() {

  return (
    <>
      {/* all the other elements */}
      <div className="page">
        <img className="icon" alt="" src={logo} />
        <h2>Welcome to River Rat Marine Construction!
          Our website is currently under development.
        </h2>
      </div>
    </>
  );
}