import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import floralImg from '../Floral.jpg';
import RealistImg from '../Realistic.jpg';
import GeometricImg from '../Geometric.jpg';
import { Box, Typography } from '@mui/material';

const Gallery: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      let newSlidesPerView = 3;
  
      if (window.innerWidth >= 1200) {
        newSlidesPerView = 3;
      } else if (window.innerWidth >= 768) {
        newSlidesPerView = 2;
      } else {
        newSlidesPerView = 1;
      }
  
      // Imprimez la nouvelle valeur pour déboguer
      console.log('New slidesPerView:', newSlidesPerView);
  
      setSlidesPerView(newSlidesPerView);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* ... */}
      <Box sx={{ paddingTop: "400px", paddingLeft: "40px" }}>
        <div style={{ marginTop: "60px" }}>
          <Typography className='TitleAbout' sx={{ fontSize: "35px", fontFamily: 'Roboto-Bold', paddingBottom: "50px" }}>
            Florales
          </Typography>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            spaceBetween={30}
            modules={[Grid, Scrollbar]}
            className="floralSwiper" // Utilisez une classe différente ici
            slidesPerView={slidesPerView}
          >
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
            spaceBetween={30}
            modules={[Grid, Scrollbar]}
            className="realistSwiper"
            slidesPerView={slidesPerView} // Utilisez la valeur dynamique
          >
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
            spaceBetween={30}
            modules={[Grid, Scrollbar]}
            className="geometricSwiper"
            slidesPerView={slidesPerView} // Utilisez la valeur dynamique
          >
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
