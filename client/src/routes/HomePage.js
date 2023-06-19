import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/style.css'
import { Spinner } from 'reactstrap';
import logo from '../assets/images/logo.png'


export default function HomePage() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const onPageLoad = () => {
      setIsLoading(false);
    };

    (document.readyState === 'complete') ?
      onPageLoad() : window.addEventListener('load', onPageLoad);
    return () => window.removeEventListener('load', onPageLoad);

  }, []);

  console.log(isLoading)

  if (isLoading) {
  return (
    <div className='page'>
      <Spinner id='spinner' color="secondary" />
    </div>
  )
  }
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