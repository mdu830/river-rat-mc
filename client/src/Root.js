import './App.css';
import Header from './components/header'
import { Outlet } from "react-router-dom";
import { Spinner } from 'reactstrap';
import { Component, useEffect, useState } from 'react';

function Root(data) {

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

  console.log(data);

  return isLoading
    ?
    (
      <div className=''>
        <Spinner id='spinner' color="secondary" />
      </div>
    )
    :
    (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    )
}


export default Root;
