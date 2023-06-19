import './App.css';
import Header from './components/header'
import { Outlet } from "react-router-dom";
import { Spinner } from 'reactstrap';
import { useEffect, useState } from 'react';

function Root() {

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
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
