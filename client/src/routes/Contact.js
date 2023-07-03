import React from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
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
        <h1>Contact Us</h1>
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
        <Form>
          <Row className=''>
            <Col md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 4, offset: 2 }}>
              <FormGroup>
                <Label for="First Name">
                  First Name
                </Label>
                <Input
                  id="examplePassword"
                  name="First Name"
                  placeholder="First Name"
                  type=""
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="last name">
                  Last Name
                </Label>
                <Input
                  id="examplePassword"
                  name="Last Name"
                  placeholder="Last Name"
                  type=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <Label for="last name">
                  Last Name
                </Label>
                <Label
                  for="exampleText"
                  sm={2}
                >
                  Text Area
                </Label>
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
      </Container>
    </motion.div>
  );
}

export default Contact;