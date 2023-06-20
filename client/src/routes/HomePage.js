import React from 'react';
import '../assets/style.css'
import logo from '../assets/images/logo.png'
import { Spinner, Container, Row, Col } from 'reactstrap';
import { Component, useEffect, useState } from 'react';
import Banner from '../components/Banner';



export default function HomePage() {

  return (
    <>
      {/* all the other elements */}
      <div id='HomePage' className="page">
        <Banner />
        <Row>
          <Container className="bg-dark p-2 customContainer ">
            <h2>Welcome to River Rat Marine Construction! Our website is under development. </h2>
          </Container>
        </Row>



      </div>
    </>
  )

}