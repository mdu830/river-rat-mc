// this needs useRef unless the error is inside of carousel

import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';
import imgTwo from '../assets/images/94.png'
import imgThree from '../assets/images/95.png'
import imgFour from '../assets/images/96.png'
import logo from '../assets/images/logo.png'



const items = [
    {
        src: imgTwo,
        altText: '',
        caption: '',
        key: 3,
    },
    {
        src: imgThree,
        altText: '',
        caption: '',
        key: 3,
    },
    {
        src: imgFour,
        altText: '',
        caption: '',
        key: 3,
    },
];

export default function Banner() {
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
                <img className='carousel' src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <>
            <style>
                {`.carousel { width: 100%; height: auto; position: relative; `}
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride='carousel'
                interval={4000}
                fade={true}
                className='carousel'>
                {slides}
            </Carousel>
            <img className="icon" alt="" src={logo} />

        </>

    );
}