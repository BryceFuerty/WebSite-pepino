import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import floralImg from '../Floral.jpg';
import RealistImg from '../Realistic.jpg';
import GeometricImg from '../Geometric.jpg';
import { Box, Typography } from '@mui/material';

const Gallery: React.FC = () => {
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <Box sx={{paddingTop:"400px", paddingLeft:"40px"}}>
        <div style={{marginTop:"60px"}}>
          <Typography className='TitleAbout' sx={{fontSize:"35px", fontFamily:'Roboto-Bold',paddingBottom:"50px"}}>
            Florales
          </Typography>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            slidesPerView={4}
            spaceBetween={30}

            modules={[Grid,Scrollbar]}
            className="mySwiper">
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={floralImg} alt="Floral Image" /></SwiperSlide>
          </Swiper>
        </div>

        <div style={{marginTop:"60px"}}>
          <Typography className='TitleAbout' sx={{fontSize:"35px", fontFamily:'Roboto-Bold',paddingBottom:"50px"}}>
            Realiste
          </Typography>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            slidesPerView={4}
            spaceBetween={30}

            modules={[Grid,Scrollbar]}
            className="mySwiper">
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={RealistImg} alt="Floral Image" /></SwiperSlide>
          </Swiper>
        </div>

        <div style={{marginTop:"60px"}}>
          <Typography className='TitleAbout' sx={{fontSize:"35px", fontFamily:'Roboto-Bold',paddingBottom:"50px"}}>
            Géométrique
          </Typography>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            slidesPerView={4}
            spaceBetween={30}

            modules={[Grid,Scrollbar]}
            className="mySwiper">
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
            <SwiperSlide><img src={GeometricImg} alt="Floral Image" /></SwiperSlide>
          </Swiper>
        </div>
        
      </Box>
    </>
  );
};

export default Gallery;
