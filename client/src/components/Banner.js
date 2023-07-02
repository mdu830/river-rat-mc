// this needs useRef unless the error is inside of carousel

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Carousel, CarouselItem, Spinner } from 'reactstrap';
import logo from '../assets/images/logo.png'
import imgLong from './ImgLong'
import imgShort from './ImgShort';
import { useMediaQuery } from 'usehooks-ts'
import { motion, useAnimate, usePresence } from 'framer-motion'





export default function Banner() {

    // change picture size based on screen size
    const matches = useMediaQuery('(min-width: 992px)')

    // images for desktop and mobile
    const [items, setItems] = useState(imgShort)

    useEffect(() => {
        matches ? setItems( imgLong) : setItems(imgShort)
    }, [matches]);

    // carousel animations
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem className='carousel' key={item.src}>
                <img className='carousel' src={item.src} alt={item.altText} effect='blur' />
            </CarouselItem>
        );
    });


    return (
        <>  
            <motion.div
                transition={{ delay: 0.6 }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                key={'AnimCar'}
            >
                <style>
                    {`.carousel { width: 100%; height: auto; position: relative; `}
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    ride='carousel'
                    interval={3500}
                    fade={true}
                    className='carousel'
                >
                    {slides}
                </Carousel>
                <img
                    className={'icon'}
                    alt=""
                    src={logo}
                />
            </motion.div >

        </>
    )


}