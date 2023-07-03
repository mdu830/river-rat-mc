import React from 'react';
import AboutData from '../components/AboutData';
import { Container, Card, CardBody, CardText, CardTitle } from 'reactstrap';
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
      <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>

        <h1>About Us</h1>

        <Card
          body
          color="dark"
          outline
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </motion.div>
  );
}

export default About;