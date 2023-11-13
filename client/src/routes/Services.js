import React, { useEffect, useState } from 'react';
import '../assets/style.css'
import { Card, Row, Col, CardHeader, Container, Spinner } from 'reactstrap';
import { motion } from 'framer-motion';

const Services = React.memo((props) => {

  const [isLoaded, setLoaded] = useState(false)
  const [dataAry, setDataAry] = useState(false)

  const data = props.data

  async function cacheData(srcObj) {
    const res = await srcObj.map((data) => {
      const obj = new Object()

      obj.title = data.title
      obj.description = data.description
      obj.Img1 = data.Img1
      obj.Img2 = data.Img2
      obj.key = data.key

      return obj
    })
    setDataAry(res)
    setLoaded(true)
  }

  useEffect(() => {
    cacheData(data)
  }, [])


  // console.log(isLoaded, dataAry)

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.2, }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
    >
      <Container fluid className='pt-2 pb-5'>
        <h1 className='mb-4'>River Rat Marine Construction Services</h1>
        <Row className='mb-4 cardRow'>
          {
            !isLoaded
              ?
              <Col className='pt-5'>
                <Spinner color='light' size={'sm'} />
              </Col>
              :
              dataAry.map((data, index) => {
                return (
                  <Col lg='6' key={data.key}>
                    <motion.div
                      transition={{ delay: 0.2 * index, }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      key={data.title}
                    >

                      <Card color='dark h-75' className='m-3 custainer'>
                        <CardHeader className=' textShadow p-2'>
                          <h2 className='pt-2'>{data.title}</h2>
                        </CardHeader >
                        <CardHeader>
                          <img alt='example' className="sqImg" src={data.Img1} />
                          <img alt='example' className="sqImg" src={data.Img2} />
                        </CardHeader>
                        <h4 className='p-3  textShadow'>{data.description}</h4>
                      </Card>

                    </motion.div>
                  </Col>

                )
              })}
        </Row>
      </Container>
    </motion.div>

  );
});

export default Services;