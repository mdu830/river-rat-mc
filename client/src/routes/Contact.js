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
import Footer from '../components/Footer';



const Contact = () => {

  return (

    <div className="page">
      <Container fluid className='bg-dark pt-2  pb-5 customContainer'>
        <h1>Contact Us</h1>
        <Row className='m-3'>
          <Col sm md={{ size: 6, offset: 3 }} className='p-3'>
            <h2 className=''>Phone: (919) 920-9213</h2>
          </Col>
          <Col md={{ size: 6, offset: 3 }} className='p-3'>
            <h2>doug@riverratmarineconstruction.com</h2>
          </Col>
        </Row>
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
    </div>
  );
}

export default Contact;