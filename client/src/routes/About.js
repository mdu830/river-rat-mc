import React from 'react';
import AboutData from '../components/AboutData';
import { Container, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { motion } from 'framer-motion';


const About = () => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animAbou'}
    >
      <Container fluid className='bg-dark pt-2  pb-5'>

        <h1>About Us</h1>

        <Row>
          <Card body width={'100%'} color="dark" className='m-4'>
            <Row>
              <Col>
                <CardBody className='' color="dark">
                  <CardTitle className='name' tag="h4" color='dark'>
                    River Rat Marine Construction
                  </CardTitle>
                  <CardText className='name'>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Row>

        <Row>
          <Card body width={'100%'} color="dark" className='m-4 '>
            <Row>
              <Col sm className=''>
                <img className='float-left' width={'60%'} alt="Sample" src="https://picsum.photos/300/200" />
              </Col>
              <Col sm>
                <CardBody className='' color="dark">
                  <CardTitle className='name' tag="h4" color='dark'>
                    Doug Whaley - Owner
                  </CardTitle>
                  <CardText className='name'>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Row>

        <Row>
          <Card body width={'100%'} color="dark" className='m-4'>
            <Row>
              <Col sm>
                <img className='' width={'60%'} alt="Sample" src="https://picsum.photos/300/200" />
              </Col>
              <Col sm>
                <CardBody className='' color="dark">
                  <CardTitle className='name' tag="h4" color='dark'>
                    Hunter - Operations Manager
                  </CardTitle>
                  <CardText className='name'>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Row>

      </Container>
    </motion.div>
  );
}

export default About;