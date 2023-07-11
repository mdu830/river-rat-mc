import React from 'react';
import { Card, Row, Col, CardHeader, Container } from 'reactstrap';
import ServiceData from '../components/ServiceData';
import { motion } from 'framer-motion';

const Services = () => {

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
        <h1 className='mb-4'>Services</h1>
        <Row>
          {data.map((data, index) => {
            return (
              <motion.div
                transition={{ delay: 0.2 * index, }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                key={data.title}
              >
                <Col>
                  <Card color='dark ' className='m-3 custainer'>
                    <CardHeader className=' textShadow p-2'>
                      <h2 className='pt-2'>{data.title}</h2>
                    </CardHeader >
                    <h4 className='p-3 textShadow'>{data.description}</h4>
                  </Card>

                </Col>
              </motion.div>
            )
          })}
        </Row>
      </Container>
    </motion.div>

  );
}

export default Services;