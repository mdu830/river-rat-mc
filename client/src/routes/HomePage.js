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
      <div id='HomePage' className="page">
        <Banner />

        <Row>
          <Container className="bg-dark  p-2 customContainer ">
            <Row>
              <h3>Welcome to River Rat Marine Construction</h3>
            </Row>
            <Row className=''>
              <Col>
                <Button size='sm' color='primary' className=' m-3'>
                  <Link className="btnLink" to={`faq/`}>FAQ</Link>
                </Button>

                <Button size='sm' className=' m-3'>
                  <Link className="btnLink" to={`contact/`}>Contact Us</Link>
                </Button>
              </Col>

            </Row>
            <Row>
            </Row>
          </Container>
          <Container className="bg-dark  p-2 customContainer ">
            <Row className=''>
              <h2>Our website is currently under development.</h2>
            </Row>
          </Container>
        </Row>

        <Footer />
      </div>
    </>
  )

}