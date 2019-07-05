import React from 'react'
import Slider from "react-slick";
import { speakIntro, pauseSpeaking } from '../../utils/speakIntro'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    centerMode: true,
    // adaptiveHeight: true,
};


export const Carousel = ({ items }) => (
    <Slider
        afterChange={index => index === 1 ? speakIntro() : pauseSpeaking()}
        {...settings}
    >
        {items.map(item => <div key={item}>{item}</div>)}
    </Slider>
)