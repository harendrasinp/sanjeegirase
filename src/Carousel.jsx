import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bookdata } from './bookdata';
import Slider from 'react-slick';
export const Carousel = () => {
    const settings = {
        dots:false,
        infinite: true,
        speed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='w-[13rem] h-[15rem] border-[0.5rem]  border-amber-900'>
            <Slider {...settings} >
                {bookdata.map((books, index) => (
                    <div className='w-[13rem] '>
                        <img className='h-[14rem] w-[13rem]' src={books} alt="b1" />
                    </div>
                ))}
            </Slider >
        </div>

    )
}
