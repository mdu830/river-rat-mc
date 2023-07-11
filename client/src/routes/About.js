import React from 'react';
import { Container, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { motion } from 'framer-motion';


const About = () => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animAbou'}
    >
      <Container fluid className='bg-dark pt-2 pb-5'>

        <h1 className='mb-5'>About Us</h1>

        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={'about'}
        >
          <div className='m-4 pb-4'>
            <Row>
              <Col>
                <CardText className='name textShadow'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </Col>
            </Row>
          </div>
        </motion.div>

        <motion.div
          transition={{ delay: 0.4 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={'doug'}
        >
          <div className='m-3 pb-3 custainer'>
            <Row>
              <CardTitle className='name textShadow mt-4 mb-4 p-1' tag="h4" color='dark'>
                Doug Whaley - Owner
              </CardTitle>
            </Row>
            <Row >
              <Col />
              <Col sm>
                <img className='custainer placeHolder' height={'75%'} alt="Sample" src="https://picsum.photos/300/200" />
              </Col>
              <Col sm='8'>
                <CardText className='name textShadow p-1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </Col>
              <Col />
            </Row>
          </div>
        </motion.div>
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={'hunter'}
        >
          <div className='m-3 mt-5 pb-3 custainer'>
            <Row>
            <CardTitle className='name textShadow mt-4 mb-4 p-1' tag="h4" color='dark'>
                  Hunter - Operations Manager
                </CardTitle>
            </Row>
            <Row>
              <Col />
              <Col sm>
                <img className='custainer placeHolder' height={'75%'} alt="Sample" src="https://picsum.photos/300/200" />
              </Col>
              <Col sm='8'>
                <CardText className='name textShadow p-1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.              </CardText>
              </Col>
              <Col />
            </Row>
          </div>
        </motion.div>


      </Container>
    </motion.div>
  );
}

export default About;