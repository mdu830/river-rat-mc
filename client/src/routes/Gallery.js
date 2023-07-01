import React from 'react';
import '../assets/style.css'
import { Container, Card, CardImg, Col, Row, Spinner } from 'reactstrap';
import GalleryImg from '../components/ImgGallery';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


const Gallery = () => {

  return (
    <>

      <div className="page">
        <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>
          <h1 className='mb-3'>Gallery</h1>
          <Row>
            {GalleryImg.map((img) => {
              return (
                <Col md="6">
                  <Card inverse className='m-3 p-1'>
                    <LazyLoadImage
                      key={img.key}
                      alt="Card image cap"
                      src={img.src}
                      style={{ height: 'auto ' }}
                      width="100%"
                      effect='blur'
                    />
                  </Card>
                </Col>

              )

            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Gallery;
