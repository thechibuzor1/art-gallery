import React from "react";
import "./Featured.css";
import img1 from "../../assests/Porto/characters/7.jpg";
import img2 from "../../assests/Porto/creepy/26.jpg";
import img3 from "../../assests/Porto/darkdays/3.jpg";
import img4 from "../../assests/Porto/faces/11.jpg";
import img5 from "../../assests/Porto/masterpiece/10.jpg";
import img6 from "../../assests/Porto/tati/5.jpg";
import img7 from "../../assests/Porto/weird/12.jpg";


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
  {
    id: 4,
    imgSrc: img4,
  },
  {
    id: 5,
    imgSrc: img5,
  },
  {
    id: 6,
    imgSrc: img6,
  },
  {
    id: 7,
    imgSrc: img7,
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
        autoplay={{ delay: 3000 }}
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
