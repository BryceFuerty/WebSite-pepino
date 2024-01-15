import React, { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import floralImg from '../Floral.jpg';
import Lightbox from 'react-18-image-lightbox';

export default function SwipeLeft() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const images: string[] = [floralImg, floralImg, floralImg, floralImg]; // Ajoutez vos images ici

  const handleItemClick = (index: number): void => {
    setLightboxIndex(index);
    setLightboxIsOpen(true);
  };

  const handleClose = (): void => {
    setLightboxIsOpen(false);
  };

  return (
    <>
      {/* Swiper */}
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
        style={{ width: "30rem", height:"30rem" ,maxWidth: "100%" }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index} onClick={() => handleItemClick(index)}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[(lightboxIndex + 1) % images.length]}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
          onCloseRequest={handleClose}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </>
  );
}
