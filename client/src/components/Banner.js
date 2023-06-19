import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: '',
        caption: '',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: '',
        caption: '',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: '',
        caption: '',
        key: 3,
    },
];

export default function Banner(args) {
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

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
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
                {`.carousel { width: 100%; height: auto; background: black; `}
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
        </>

    );
}