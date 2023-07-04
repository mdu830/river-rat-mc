import React, { useEffect, useState } from 'react';
import '../assets/style.css'
import { Container, Card, Col, Row } from 'reactstrap';
import { Blurhash } from "react-blurhash";
import { motion } from 'framer-motion'


const Gallery = (props) => {

  const [isloaded, setLoaded] = useState({
    'one': false, 
    'two': false, 
    'three': false, 
    'four': false, 
    'five': false,
    'six': false, 
    'seven': false, 
    'eight': false, 
    'nine': false
})
  const imgAry = props.data

  useEffect(() => {
    imgAry.map((data, i) => {
      const img = new Image()

      img.src = data.src
      img.key = data.key
      img.id = data.id

      img.onload = () => {
        let load = { [img.id]: true }
        let newObj = {...isloaded, ...load}        
        setLoaded(newObj)
      }
    })

  }, [imgAry])

  return (
    <motion.div
      className='bg-dark page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animGall'}
    >
      <Container fluid className='pt-2  pb-5 '>
        <h1 className='mb-3'>Gallery</h1>
        <Row>
          {imgAry.map((img, index) => {

            return (

              <Col lg='4' className='mb-5' key={img.key}>
                <motion.div
                  transition={{ delay: 0.3 * index, }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={img.key}
                >
                  {
                    !isloaded.nine
                      ?
                      <Blurhash
                        className='boxShadow'
                        hash={img.hash}
                        width={300}
                        height={img.height}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                      />
                      :
                      <img
                        className='boxShadow'
                        src={img.src}
                        id={img.id}
                        width={300}
                        height={img.height}
                        alt='thumbnail' />
                  }
                </motion.div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Gallery;
