import React from "react";
import "./Featured.css";
import img1 from "../../assests/Porto/89.jpg";
import img2 from "../../assests/Porto/90.jpg";
import img3 from "../../assests/Porto/91.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

const data = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
];

const Featured = () => {
  return (
    <div className="featured">
      <h2>Featured</h2>
      <Swiper className="feature__swiper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{ delay: 2000 }}
        effect='fade'
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="featured-item" key={index}>
              <img className="feature_img" src={item.imgSrc} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Featured;
