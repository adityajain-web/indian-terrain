import React from 'react';
import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Slider1 from '../assets/images/home/home-banner-slider-1.webp'
import Slider2 from '../assets/images/home/home-banner-slider-2.webp'
import Slider3 from '../assets/images/home/home-banner-slider-3.webp'
import Slider4 from '../assets/images/home/home-banner-slider-4.webp'
import Styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <>
            <main className='pagemain'>
                <section className='d-none d-lg-block'>
                    <Container maxWidth="xxl" className='p-0'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            {
                                [Slider1, Slider2, Slider3, Slider4].map(item => <SwiperSlide className={`${Styles.swiperSlide}`} style={{ backgroundImage: `url("${item}")` }}></SwiperSlide>)
                            }
                        </Swiper>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Home