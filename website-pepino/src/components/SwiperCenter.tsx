import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom'

import Home1 from '../assets/DiversHome/Home (1).jpg';
import Home2 from '../assets/DiversHome/Home (2).jpg';
import Home3 from '../assets/DiversHome/Home (3).jpg';
import Home4 from '../assets/DiversHome/Home (4).jpg';
import Home5 from '../assets/DiversHome/Home (5).jpg';
import Home6 from '../assets/DiversHome/Home (6).jpg';
import Home7 from '../assets/DiversHome/Home (7).jpg';
import Home8 from '../assets/DiversHome/Home (8).jpg';
import Home9 from '../assets/DiversHome/Home (9).jpg';



import Lightbox from 'react-18-image-lightbox';


export default function SwipeCenter() {
  const [widthSwp, setwidthSwp] = useState(40)
  const [heightSwp, setheightSwp] = useState(35)
  const images: string[] = [Home1,Home2,Home3,Home4,Home5,Home6,Home7,Home8,Home9]; // Ajoutez vos images ici

  useEffect(() => {
    const handleResize = () => {

      console.log(widthSwp)
      
      if (window.innerWidth > 700) {
        setwidthSwp(35);
        setheightSwp(30)
      }else {
        setwidthSwp(20);
        setheightSwp(20)
      }

    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        modules={[Zoom, Autoplay, Pagination, Navigation]}
        style={{ width: `${widthSwp}rem`, height:`${heightSwp}rem` , position:"relative"}}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
