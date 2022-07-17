import React, { useState } from "react";
import "../components/Explore/Explore.css";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "../assests/Porto/darkdays/1.jpg";
import img2 from "../assests/Porto/darkdays/2.jpg";
import img3 from "../assests/Porto/darkdays/3.jpg";
import img4 from "../assests/Porto/darkdays/4.jpg";
import img5 from "../assests/Porto/darkdays/5.jpg";
import img6 from "../assests/Porto/darkdays/6.jpg";
import img7 from "../assests/Porto/darkdays/7.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdArrowRoundBack } from "react-icons/io";

const Darktimes = () => {
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
        <h2>Dark Days</h2>
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

export default Darktimes;
