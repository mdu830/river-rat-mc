import React from 'react';
import { Container, CardTitle, Col, Row, CardHeader, Card } from 'reactstrap';
import { motion } from 'framer-motion';
import logo192 from '../assets/images/logo192.png'


const About = React.memo(() => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animAbou'}
    >
      <Container fluid className='pt-2 pb-5'>

        <h1 className='mb-5'>About River Rat Marine Construction</h1>


        <div className=' pb-4'>
          <motion.div
            transition={{ delay: 0.3 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={'overview'}
          >
            <div color='dark p-4' className='m-4 '>
              <Row>
                <CardTitle className='name textShadow mt-4 mb-3 p-1' color='dark'>
                  <h2>
                    We are a family owned marine construction company out of Mount Olive North Carolina.
                    Proudly providing our services across eastern North Carolina.
                  </h2>
                </CardTitle>
              </Row>
            </div>
          </motion.div>

          <motion.div
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={'doug & rrmc'}
          >
            <Card color='dark p-2 pb-2' className='m-4 mt-5 custainer'>

              <Row>
                <CardHeader>
                  <CardTitle className='name textShadow' color='dark'>
                    <h2>Owner and Operator | Doug Whaley</h2>
                  </CardTitle>
                </CardHeader>

              </Row>
              <Row className='pt-5 p-1'>
                <Col />
                <Col sm className=''>
                  <img className='mb-5 p-1 placeHolder' height={'80%'} alt="Sample" src={logo192} />
                </Col>
                <Col sm='8' className='pt-1 p-3'>
                  <h4>
                    River Rat Marine Construction LLC was founded in June 2020 by Douglas Whaley.
                  </h4>
                  <h4>
                    Doug has been in and around construction most of his life.
                    Including operating heavy equipment along with expert knowledge of building and repairing structures.
                  </h4>
                  <h4>
                    It was Doug's passion for boating and fishing that allowed him the opportunity to work on the water and form River Rat Marine Construction LLC.
                  </h4>
                </Col>
                <Col />
              </Row>
            </Card>
          </motion.div>

          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={'core values'}
          >
            <Card color='dark p-2' className='m-4 mt-5 custainer'>

              <Row>
                <CardHeader>
                  <CardTitle className='name textShadow ' color='dark'>
                    <h2>Our Core Values</h2>
                  </CardTitle>
                </CardHeader>

              </Row>

              <Row className='pt-4 p-2'>
                <Col>
                  <h4>
                    At River Rat Marine Construction LLC our motivation is our satified customers.
                    This is accomplished by our team providing superior workmanship with the use of quality materials at affordable prices.
                  </h4>
                  
                  <h4>
                    Whether you need repairs, an upgrade or even a new installation, River Rat Marine Construction LLC is here to serve you.
                    No job is too small or too big!
                  </h4>
                </Col>
              </Row>

            </Card>
          </motion.div>


          <motion.div
            transition={{ delay: 0.6 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={'counties'}
          >
            <Row>

              <Col md>
                <Card color='dark p-3' className='m-4 custainer' >

                  <Row>
                    <CardHeader>
                      <CardTitle className='name textShadow ' color='dark'>
                        <h2>Counties We Serve</h2>
                      </CardTitle>
                    </CardHeader>
                  </Row>
                  <h4 className='p-3'>
                    <li className='float-l'>&#10041; Jones County</li>
                    <li className='float-l'>&#10041; Pamlico County</li>
                    <li className='float-l'>&#10041; Carteret County</li>
                    <li className='float-l'>&#10041; Craven County</li>
                    <li className='float-l'>&#10041; Onslow County</li>
                    <li className='float-l'>&#10041; Pender County</li>
                  </h4>
                </Card>

              </Col>
              <Col md>
                <Card color='dark p-3 pb-1' className='m-4 custainer'>
                  <Row>
                    <CardHeader>
                      <CardTitle className='name textShadow ' color='dark'>
                        <h2>Hours of Operation</h2>
                      </CardTitle>
                    </CardHeader>
                  </Row >
                  <h4 className='pt-3'>
                    <li className='float-l'>Monday - Friday </li>
                    <li className='float-l'>|</li>
                    <li className='float-l'>8:00am - 5:00pm</li>
                  </h4>
                  <h4 className='p-2'>
                    <li className='float-l'>Saturday & Sunday</li>
                    <li className='float-l'>|</li>
                    <li className='float-l'>Closed</li>
                  </h4>
                </Card>

              </Col>
            </Row>
          </motion.div>
        </div>
      </Container >
    </motion.div >
  );
});

export default About;