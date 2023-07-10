// this needs useRef unless the error is inside of carousel

import React, { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import logo from '../assets/images/logo512.png'
import imgLong from './ImgLong'
import imgShort from './ImgShort';
import { useMediaQuery } from 'usehooks-ts'

const Banner = React.memo(props => {

    // change picture size based on screen size
    const matches = useMediaQuery('(min-width: 992px)')

    // images for desktop and mobile
    const [items, setItems] = useState(imgShort)

    useEffect(() => {
        matches ? setItems(imgLong) : setItems(imgShort)
    }, [matches]);

    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        items.map((data) => {
            const img = new Image()

            img.src = data.src
            img.key = data.key
            img.id = data.id
            img.val = data.value

            img.onload = () => {
                if (img.val = 'isloaded')
                    setLoaded(true)
            }
            return
        })
    }, [props])

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

    useRef(<CarouselItem />)


    const slides = items.map((item) => {
        return (
            <CarouselItem className='carousel' key={item.src} >
                <div >
                    <img className='carousel' src={item.src} alt={item.altText} effect='blur' />
                    <img className={'icon'} alt="carImg" src={logo} />
                </div>
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {`.carousel, .carousel-inner {
                    width: 100%; 
                    height: auto; 
                    position: relative;                     
                    }`}
            </style>
            <div className='carousel-inner'>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    ride='carousel'
                    interval={3500}
                    fade={true}
                    className='carousel carousel-inner'
                >
                    {slides}
                </Carousel>
            </ div>
        </div >
    )


})

export default Banner;