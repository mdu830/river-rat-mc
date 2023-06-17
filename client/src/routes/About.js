import React from 'react';
import { Outlet } from "react-router-dom";



const About = () => {

  return (

    <div className="detail">
        <Outlet />
        <h1>about</h1>
    </div>
  );
}

export default About;