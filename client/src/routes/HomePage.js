import React from 'react';
import '../assets/style.css'
import logo from '../assets/images/logo.png'
import { Spinner, Container, Row, Col, Button } from 'reactstrap';
import { Component, useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";



export default function HomePage() {

  return (
    <>
      {/* all the other elements */}
      <div id='HomePage' className="bg-dark page">
        <Banner />


        <Container fluid className="bg-dark customContainer">
          <Button size='xl' color='primary' className='m-4'>
            <Link className="btnLink" to={`faq/`}>FAQ</Link>
          </Button>

          <Button size='xl' className='m-4'>
            <Link className="btnLink" to={`contact/`}>Contact Us</Link>
          </Button>
          <h3 className=''>Welcome to River Rat Marine Construction</h3>
          <h2>Our website is currently under development.</h2>
        </Container>


        <Footer />
      </div>
    </>
  )

}