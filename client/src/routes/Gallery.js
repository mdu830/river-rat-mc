import React from 'react';
import '../assets/style.css'
import { Container, Card, CardImg, Col, Row } from 'reactstrap';


export default function Gallery() {
  return (
    <>
      {/* all the other elements */}
      <div className="page">
        <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>
          <h1 className='mb-3'>Gallery</h1>
          <Row md="4" sm="2" xs="1">
            <Col md='4'>
              <Card className='m-4'>
                <CardImg alt="Card image cap" src="https://picsum.photos/900/270?grayscale" style={{ height: 'auto' }} width="100%" />
              </Card>
            </Col>

            <Col md='4'>
              <Card className='m-4'>
                <CardImg alt="Card image cap" src="https://picsum.photos/900/270?grayscale" style={{ height: 'auto' }} width="100%" />
              </Card>
            </Col>

            <Col md='4'>
              <Card className='m-4'>
                <CardImg alt="Card image cap" src="https://picsum.photos/900/270?grayscale" style={{ height: 'auto' }} width="100%" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}