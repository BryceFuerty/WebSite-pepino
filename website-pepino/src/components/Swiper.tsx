// core version + navigation, pagination modules:
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import floralImg from '../Floral.jpg'
import { Height } from '@mui/icons-material';

export default function Swipe(){
  return(
    <>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      
      style={{width:"35rem", maxWidth: "100%"}}
      >

      <SwiperSlide><img src={floralImg}></img></SwiperSlide>
      <SwiperSlide><img src={floralImg}></img></SwiperSlide>
      <SwiperSlide><img src={floralImg}></img></SwiperSlide>
      <SwiperSlide><img src={floralImg}></img></SwiperSlide>
    </Swiper>
  </>
  )
}
