import React, { useState } from "react";
import "../components/Explore/Explore.css";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "../assests/Porto/faces/1.jpg";
import img3 from "../assests/Porto/faces/3.jpg";
import img2 from "../assests/Porto/faces/2.jpg";
import img4 from "../assests/Porto/faces/4.jpg";
import img5 from "../assests/Porto/faces/5.jpg";
import img6 from "../assests/Porto/faces/6.jpg";
import img7 from "../assests/Porto/faces/7.jpg";
import img8 from "../assests/Porto/faces/8.jpg";
import img9 from "../assests/Porto/faces/9.jpg";
import img10 from "../assests/Porto/faces/10.jpg";
import img11 from "../assests/Porto/faces/11.jpg";
import img12 from "../assests/Porto/faces/12.jpg";
import img13 from "../assests/Porto/faces/13.jpg";
import img14 from "../assests/Porto/faces/14.jpg";
import img15 from "../assests/Porto/faces/15.jpg";
import img16 from "../assests/Porto/faces/16.jpg";
import img17 from "../assests/Porto/faces/17.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdArrowRoundBack } from "react-icons/io";

const Faces = () => {
  let data = [
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
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="explore">
      <div>
        <IoMdArrowRoundBack
          className="back_button"
          onClick={() => window.history.back()}
        />
        <h2>Faces</h2>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="media">
        {data.map((item, index) => {
          return (
            <div
              className="Pictures"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <LazyLoadImage
                style={{ width: "100%" }}
                src={item.imgSrc}
                effect="blur"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faces;
