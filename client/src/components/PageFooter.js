import React from "react";
import { Col, Row } from "reactstrap";
import emailImg from '../assets/images/icons/mail50.png'
import facebookImg from '../assets/images/icons/facebook50.png'
// import pinImg from '../assets/images/icons/location50.png'

const PageFooter = () => {

    return (
        <div className="pgFooter">
            <Row>
                <Col className="p-" md='6' onClick={() => window.location = 'mailto:pam@riverratmarineconstruction.com'}>
                    <img className='IconSmall p-2' alt='Email' src={emailImg}></img>
                    pam@riverratmarineconstruction.com
                </Col>
                <Col className="p-" md='6' onClick={() => window.location = 'https://www.facebook.com/profile.php?id=100084151166191'}>
                    <img className='IconSmall p-2' alt='Email' src={facebookImg}></img>
                    /River-Rat-Marine-Construction
                </Col>
                {/* <Col className="p-" md='4'>
                    <img className='IconSmall p-2' alt='Email' src={pinImg}></img>
                    202 Jeff Outlaw Rd, Mt Olive, NC 28365
                </Col> */}
            </Row>
        </div>
    )
}

export default PageFooter;