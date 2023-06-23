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
      <Container fluid className='vh-100 bg-dark pt-2 customContainer'>
        <h1>Contact Us</h1>

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
      <Footer />
    </div>
  );
}

export default Contact;