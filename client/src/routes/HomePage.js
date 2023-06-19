import React from 'react';
import '../assets/style.css'
import logo from '../assets/images/logo.png'
import { Spinner } from 'reactstrap';
import { Component, useEffect, useState } from 'react';


export default function HomePage() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const onPageLoad = () => {
      setIsLoading(false);
    };

    (document.readyState === 'complete') 
    ?
    onPageLoad() 
    : 
    window.addEventListener('load', onPageLoad);
    return () => window.removeEventListener('load', onPageLoad);

  }, []);

  return isLoading ?
  (
    <div className='page'>
      <Spinner id='spinner' color="secondary" />
    </div>
  )
  :
  (
    <>
      {/* all the other elements */}
      <div className="page">
        <img className="icon" alt="" src={logo} />
        <h2>Welcome to River Rat Marine Construction!
          Our website is currently under development.
        </h2>
      </div>
    </>
  )

}