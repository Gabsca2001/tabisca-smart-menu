import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import '../assets/styles/GalleryPage.css';


const GalleryPage = () => {

  const images = [
    'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340'
  ];

  return (
    <div className="gallery-container">
      <Swiper
        cssMode={true}
        spaceBetween={30}
        navigation={true}
        pagination={
          {
            clickable: true
          }
        }
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image">
              <img src={image} alt={`image-${index}`} style={{maxHeight: '500px'}} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default GalleryPage