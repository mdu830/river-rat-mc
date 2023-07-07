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
        <h2
          className='linkLarge'
          onClick={() => window.location = 'tel:+19199209213'}
        >Phone: (919) 920-9213
        </h2>

        <h2
          className='linkLarge'
          onClick={() => window.location = 'mailto:pam@riverratmarineconstruction.com'}
        >pam@riverratmarineconstruction.com
        </h2>
        <Row className='mt-5'>
          <Col md={{ size: 8, offset: 2 }}>
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
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;