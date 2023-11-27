import React from 'react';
import { Container, CardTitle, Col, Row, CardHeader, Card } from 'reactstrap';
import { motion } from 'framer-motion';
import logo192 from '../assets/images/logo192.png'
import PageFooter from '../components/PageFooter';


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
      <Container fluid className='pt-2'>

        <h1 className='mb-5'>About River Rat Marine Construction</h1>

        <div className=' pb-4'>

          <motion.div
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={'doug & rrmc'}
          >
            <CardTitle className='name textShadow  mb-3 p-1' color='dark'>
              <h3>
                We are a family owned marine construction company out of Mount Olive North Carolina.
                Proudly providing our services across Eastern North Carolina.
              </h3>
            </CardTitle>
            <Card color='dark p-2 pb-2' className='m-2 mt-3 custainer'>

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
            <Card color='dark p-2' className='m-2 mt-5 custainer'>

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
            <Row className='mb-4'>

              <Col md>
                <Card color='dark p-2' className='mt-5 m-2 custainer' >

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
                <Card color='dark p-2 pb-1' className='mt-5 m-2 custainer'>
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
        <Row>
          <PageFooter className="float-b" />
        </Row>
      </Container >
    </motion.div >
  );
});

export default About;