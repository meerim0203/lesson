import React from 'react';

import Slider from "react-slick";
import Data from "./data";

const Swiper = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
    };
    return (
        <section id="swiper">
            <div className="container">
                <div className="swiper--general__line"/>
                <p className="swiper--general__description"> Грузовые перевозки по низкой цене осуществляются в <br/>любое
                    время дня и ночи. Организуем комфортный переезд <br/>или быструю доставку груза по Бишкеку и
                    Кыргызстану.</p>
                <div className="swiper--general">
                    <Slider {...settings}>
                        {
                            Data.map(el => {
                                return (

                                    <div className="key{rl.id">
                                        <div className="swiper--general__block--content">
                                            <img src={el.img} alt="img"/>
                                            <h1>{el.title}</h1>
                                            <p>{el.desc}</p>
                                            <h2>{el.price}</h2>
                                        </div>

                                    </div>


                                )
                            })
                        }

                    </Slider>
                </div>
            </div>

        </section>
    );
};

export default Swiper;