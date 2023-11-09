import React from 'react';
import '../assets/style.css'
import { Card, Row, Col, CardHeader, Container } from 'reactstrap';
import ServiceData from '../components/ServiceData';
import { motion } from 'framer-motion';

const Services = React.memo(() => {

  const data = ServiceData;

  return (
    <motion.div
      className='page'
      transition={{ delay: 0.2, }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
    >
      <Container fluid className='bg-dark pt-2 pb-5'>
        <h1 className='mb-4'>Our Services</h1>
        <Row className='mb-4 cardRow'>
          {data.map((data, index) => {
            return (
              <Col lg='6'>
                <motion.div
                  transition={{ delay: 0.2 * index, }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  key={data.title}
                >

                  <Card color='dark h-75' className='m-3 custainer'>
                    <CardHeader className=' textShadow p-2'>
                      <h2 className='pt-2'>{data.title}</h2>
                    </CardHeader >
                    <CardHeader>
                      <img alt='example' className="sqImg" src={data.Img1} />
                      <img alt='example' className="sqImg" src={data.Img2} />
                    </CardHeader>
                    <h4 className='p-3  textShadow'>{data.description}</h4>
                  </Card>

                </motion.div>
              </Col>

            )
          })}
        </Row>
      </Container>
    </motion.div>

  );
});

export default Services;