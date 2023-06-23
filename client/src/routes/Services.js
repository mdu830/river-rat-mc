import React from 'react';
import { Card, CardHeader, Container, ListGroup, ListGroupItem } from 'reactstrap';
import Footer from '../components/Footer';


const Services = () => {

  return (

    <div className="page">

      <Container fluid className='bg-dark pt-2 pb-5'>
        <h1>Services</h1>
        <Card color='dark' className='m-3'>
          <CardHeader className='cardHeader'>
            <h3>Sea walls</h3>
          </CardHeader>
          <ListGroup flush >
            <ListGroupItem className='bg-dark description'>
              <h4>Service Description -
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card color='dark' className='m-3'>
          <CardHeader className='cardHeader'>
            <h3>Docks</h3>
          </CardHeader>
          <ListGroup flush >
            <ListGroupItem className='bg-dark description'>
              <h4>Service Description -
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card color='dark' className='m-3'>
          <CardHeader className='cardHeader'>
            <h3>Boat Lifts</h3>
          </CardHeader>
          <ListGroup flush >
            <ListGroupItem className='bg-dark description'>
              <h4>Service Description -
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card color='dark' className='m-3'>
          <CardHeader className='cardHeader'>
            <h3>Boat Lifts</h3>
          </CardHeader>
          <ListGroup flush >
            <ListGroupItem className='bg-dark description'>
              <h4>Service Description -
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
}

export default Services;