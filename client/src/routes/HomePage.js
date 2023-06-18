import React from 'react';
import '../assets/style.css'
import logo from '../assets/images/logo.png'


export default function HomePage() {
  return (
    <>
      {/* all the other elements */}
      <div className="page">
        <img className="icon" alt="" src={logo} />
        <h1>HomePage</h1>
      </div>
    </>
  );
}