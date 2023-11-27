import React, { useRef } from 'react';
import { Card, Form, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

const EmailForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        console.log(form.current.email.value)

        // emailjs.sendForm('service_7qd1uo9', 'template_sq3yxpb', form.current, 'FNIBweH7_5vKNQ6q8')
        //     .then((result) => {
        //         // show the user a success message
        //         console.log(result)
        //     }, (error) => {
        //         // show the user an error
        //         console.log(error)
        //     });
    };

    return (
        <Row className='mt-3'>
            <Col md={{ size: 8, offset: 2 }}>
                <motion.div
                    transition={{ delay: 0.5 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    key={'animEmail'}
                >
                    <Card className='bg-dark custainer p-3 mb-4'>

                        <form ref={form} onSubmit={sendEmail}>
                            <h4 className='name textShadow pb-2'>
                                Send Us A Message
                            </h4>
                            <Row className='m-1'>
                                <Col md={{ size: 8, offset: 2 }}>
                                    <FormGroup>
                                        <Input className='input' name="from_name" placeholder="Name" type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-1'>
                                <Col md={{ size: 8, offset: 2 }}>
                                    <FormGroup>
                                        <Input className='input' name='email' placeholder="Email Address" type="email"  />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-1'>
                                <Col md={{ size: 8, offset: 2 }}>
                                    <FormGroup>
                                        <Input className='input' name="message" placeholder="Message" type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button id='submitBtn' disabled className='customButton'> Submit </Button>
                        </form>
                    </Card>
                </motion.div>
            </Col>
        </Row>
    )
}

export default EmailForm;