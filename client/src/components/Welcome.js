import { Container, Button, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'usehooks-ts'
import { motion } from 'framer-motion'
import familyOwned from '../assets/images/badges/family-owned.webp'
import fullyInsured from '../assets/images/badges/fully-insured.webp'
import excellentService from '../assets/images/badges/excellent-service.webp'


export default function Welcome() {

    const matches = useMediaQuery('(min-width: 585px)')

    return(
        <Container fluid className=" bg-dark border-top pt-2">

        <Row className='m-3'>
          {matches ? <Col fluid /> : ''}
          <Col fluid className=''>
            <Button size='md' color="primary" outline className='w-100 mb-4 mt-4'>
              <Link className="btnLink textShadow" to={'faq/'}>FAQ</Link>
            </Button>
          </Col>
          <Col fluid className=''>
            <Button size='md' className=' w-100 mb-4 mt-4'>
              <Link className="btnLink textShadow" to={`contact/`}>Contact Us</Link>
            </Button>
          </Col>
          {matches ? <Col fluid /> : ''}
        </Row>
    
        <h3 className='textShadow'>Welcome to River Rat Marine Construction</h3>
    
        <motion.div
          transition={{ delay: 0.9 }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          key={'AnimBage1'}
        >
          <Row className=''>
            <Col fluid />
            <Col fluid >
              <img id='family' alt='' className='mt-4 p-1' src={familyOwned} />
            </Col>
            <Col fluid >
              <img id='service' alt='' className='mt-4 p-1' src={excellentService} />
            </Col>
            <Col fluid >
              <img id='insured' alt='' className='mt-4 p-1' src={fullyInsured} />
            </Col>
            <Col fluid />
          </Row>
        </motion.div>
        
      </Container>
    )
}