import React, { useEffect, useState } from 'react';
import '../assets/style.css'
import { Container, Col, Row, Spinner } from 'reactstrap';
import { motion } from 'framer-motion'




const Gallery = React.memo(props => {

  const [isLoaded, setLoaded] = useState(false)
  const [imgAry, setImgAry] = useState(false)

  const imgs = props.data

  async function cacheImages(srcArray) {
    const res = await srcArray.map((data) => {
      const img = new Image()

      img.src = data.src
      img.key = data.key
      img.id = data.id
      img.val = data.value
      img.onload = () => {
        if (img.value = 'isloaded')
          setLoaded(true)
      }
      return img
    })
    setImgAry(res)

  }

  useEffect(() => {
    cacheImages(imgs)
  }, [])



  return (
    <motion.div
      className='bg-dark page'
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animGall'}
    >
      <Container fluid className='pt-2  pb-5 '>
        <h1 className='mb-5'>Photo Gallery</h1>
        <Row>
          {
            !isLoaded
              ?
              <Col className='pt-5'>
                <Spinner color='light' size={'sm'} />
              </Col>
              :
              imgAry.map((img, index) => {

                return (
                  <Col md='4' className='mb-5' key={img.key}>
                    <motion.div
                      transition={{ delay: 0.3 * index, }}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      key={img.key}
                    >
                      <img
                        className='custainer galImg'
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
