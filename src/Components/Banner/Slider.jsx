import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bg1 from "../../assets/Slider_1.jpg"
import bg2 from "../../assets/Slider_2.jpg"
import bg3 from "../../assets/Slider_3.jpg"
import Slide from './Slide';
export default function Slider () {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    return (
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={bg1} text='Medi Pharma'></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bg2} text='One Aid'></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bg3} text='Pharma Bazaar'></Slide>
        </SwiperSlide>

        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
      </>
    );
};

