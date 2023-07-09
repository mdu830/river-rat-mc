import React from 'react';
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  CardText,
  Button
} from 'reactstrap';
import { motion } from 'framer-motion'



const Contact = () => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animCont'}
    >
      <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>
        <h1 className='mb-5'>Contact Us</h1>

        <Row>
          <Col>
            <motion.div
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              key={'animPhone'}
            >
              <h2
                className='linkLarge pb-4'
                onClick={() => window.location = 'tel:+19199209213'}
              >Phone: (919) 920-9213
              </h2>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              key={'animEmail'}
            >
              <h2
                className='linkLarge pb-4'
                onClick={() => window.location = 'mailto:pam@riverratmarineconstruction.com'}
              >pam@riverratmarineconstruction.com
              </h2>
            </motion.div>
          </Col>
        </Row>



        <Row className='mt-3'>
          <Col md={{ size: 8, offset: 2 }}>
            <motion.div
              transition={{ delay: 0.4 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              key={'animEmail'}
            >
              <Card className='bg-dark boxShadow p-3 '>

                <Form>
                  <h2 className='name textShadow pb-2'>
                    Send us a Message
                  </h2>
                  <Row className='m-2'>
                    <Col md={{ size: 8, offset: 2 }}>
                      <FormGroup>
                        <Input
                          id="examplePassword"
                          name="Name"
                          placeholder="Name"
                          type=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className='m-2'>
                    <Col md={{ size: 8, offset: 2 }}>
                      <FormGroup>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Email Address"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className='m-2'>
                    <Col md={{ size: 8, offset: 2 }}>
                      <FormGroup>
                        <Input
                          id="exampleText"
                          name="Message"
                          placeholder="Message"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button>
                    Submit
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;