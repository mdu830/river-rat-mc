import React, { useEffect, useState } from 'react';
import '../assets/style.css'
import { Container, Card, Col, Row, Spinner } from 'reactstrap';
import { Blurhash } from "react-blurhash";
import { motion } from 'framer-motion'


const Gallery = React.memo(props => {

  const [isLoaded, setLoaded] = useState(false)

  const imgAry = props.data

  useEffect(() => {
    imgAry.map((data) => {
      const img = new Image()

      img.src = data.src
      img.key = data.key
      img.id = data.id
      img.val = data.value

      img.onload = () => {
        if (img.val = 'isloaded')
          setLoaded(true)
      }
    })
  }, [isLoaded])

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
        {
          !isLoaded
          ? 
          <Col className='pt-5'>
            <Spinner color='light' size='md' />
          </Col>
          :
          imgAry.map((img, index) => {

            return (
              <Col lg='4' className='mb-5' key={img.key}>
                <motion.div
                  transition={{ delay: 0.3 * index, }}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  key={img.key}
                >
                  <img
                    className='boxShadow galImg m-3'
                    src={img.src}
                    id={img.id}
                    width={'90%'}
                    height={'auto'}
                    alt='thumbnail'
                  />
                </motion.div>
              </Col>
            )
          })
        }
        </Row>
      </Container>
    </motion.div>
  );
})

export default Gallery;
