import React from 'react';
import { Container, CardText, CardTitle, Col, Row, CardHeader, Card } from 'reactstrap';
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
      <Container fluid className='bg-dark pt-2 pb-5'>

        <h1 className='mb-5'>About River Rat Marine Construction</h1>

        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={'about'}
        >
          <div className=' pb-4'>


            <Card color='dark p-2' className='m-3 custainer'>

              <CardHeader>
                <Row>
                <CardTitle className='name textShadow mt-4 mb-3 p-1' color='dark'>
                  <h3>
                    We are a family owned and operated marine construction company out of Mount Olive North Carolina.
                    Proudly providing our services across Eastern North Carolina.
                  </h3>
                  </CardTitle>
                </Row>
              </CardHeader>

              <CardHeader>
                <Row>
                  <CardTitle className='name textShadow mt-4 mb-3 p-1' color='dark'>
                    <h3>Doug Whaley - Owner</h3>
                  </CardTitle>
                </Row>
                <Row >
                  <Col />
                  <Col sm>
                    <img className=' placeHolder' height={'75%'} alt="Sample" src={logo192} />
                  </Col>
                  <Col sm='8'>
                    <CardText className='name textShadow m-1'>
                      <h3>
                        River Rat Marine Construction LLC was founded in June 2020 by Douglas Whaley.
                        Doug has been in and around construction most of his life.
                        Including operating heavy equipment along with expert knowledge of building and repairing structures.
                        It was Doug's passion for boating and fishing that allowed him the opportunity to work on the water and form River Rat Marine Construction LLC.
                      </h3>
                    </CardText>
                  </Col>
                  <Col />
                </Row>
              </CardHeader>

              <Row>
                <CardHeader>
                  <Col>
                    <CardText className='name textShadow m-4'>

                      <h4>
                        At River Rat Marine Construction LLC our motivation is our satified customers.
                        This is accomplished by our team providing superior workmanship with the use of quality materials at affordable prices.
                        Whether you need repairs or an upgrade or even a new installation, River Rat Marine Construction LLC is here to serve you.
                        No job is too small or too big!
                      </h4>
                    </CardText>
                  </Col>
                </CardHeader>
              </Row>

              <motion.div
                transition={{ delay: 0.4 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                key={'doug'}
              >
                <Row>
                  {/* <CardHeader> */}
                  <Col>
                    <CardText className='name textShadow m-3'>
                      <h3 className=''>Counties We Serve</h3>
                      <h4>
                        <li className='float-l'>&#10041; Jones County</li>
                        <li className='float-l'>&#10041; Pamlico County</li>
                        <li className='float-l'>&#10041; Carteret County</li>
                        <li className='float-l'>&#10041; Craven County</li>
                        <li className='float-l'>&#10041; Onslow County</li>
                        <li className='float-l'>&#10041; Pender County</li>
                      </h4>
                    </CardText>
                  </Col>
                  {/* </CardHeader> */}
                </Row>
                {/* </div> */}
              </motion.div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
});

export default About;