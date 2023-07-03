import React from 'react';
import '../assets/style.css'
import { Container, Card, CardImg, Col, Row, Spinner } from 'reactstrap';
import GalleryImg from '../components/ImgGallery';
import { LazyLoadImage, placeholder } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import {motion} from 'framer-motion'


const Gallery = () => {


  return (
    <>

      <motion.div
        className='page'
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        key={'animGall'}
      >       
       <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>
          <h1 className='mb-3'>Gallery</h1>
          <Row>
            {GalleryImg.map((img) => {

              return (
                <Col md="4" key={img.key}>
                  <div className='m-3 p-1'>
                    <LazyLoadImage
                      className='galImg boxShadow'
                      alt="Card image cap"
                      src={img.src}
                      style={{ height: 'auto ' }}
                      placeholder={placeholder}
                      width="100%"
                      effect='blur'
                    />
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default Gallery;
