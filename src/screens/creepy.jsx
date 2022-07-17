import React, { useState } from "react";
import "../components/Explore/Explore.css";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "../assests/Porto/creepy/1.jpg";
import img3 from "../assests/Porto/creepy/3.jpg";
import img2 from "../assests/Porto/creepy/2.jpg";
import img4 from "../assests/Porto/creepy/4.jpg";
import img5 from "../assests/Porto/creepy/5.jpg";
import img6 from "../assests/Porto/creepy/6.jpg";
import img7 from "../assests/Porto/creepy/7.jpg";
import img8 from "../assests/Porto/creepy/8.jpg";
import img9 from "../assests/Porto/creepy/9.jpg";
import img10 from "../assests/Porto/creepy/10.jpg";
import img11 from "../assests/Porto/creepy/11.jpg";
import img12 from "../assests/Porto/creepy/12.jpg";
import img13 from "../assests/Porto/creepy/13.jpg";
import img14 from "../assests/Porto/creepy/14.jpg";
import img15 from "../assests/Porto/creepy/15.jpg";
import img16 from "../assests/Porto/creepy/16.jpg";
import img17 from "../assests/Porto/creepy/17.jpg";
import img18 from "../assests/Porto/creepy/18.jpg";
import img19 from "../assests/Porto/creepy/19.jpg";
import img20 from "../assests/Porto/creepy/20.jpg";
import img21 from "../assests/Porto/creepy/21.jpg";
import img22 from "../assests/Porto/creepy/22.jpg";
import img23 from "../assests/Porto/creepy/23.jpg";
import img24 from "../assests/Porto/creepy/24.jpg";
import img25 from "../assests/Porto/creepy/25.jpg";
import img26 from "../assests/Porto/creepy/26.jpg";
import img27 from "../assests/Porto/creepy/27.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdArrowRoundBack } from "react-icons/io";

const Creepy = () => {
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
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className="explore">
        <div>
          <IoMdArrowRoundBack
            className="back_button"
            onClick={() => window.history.back()}
          />
          <h2>Creepy Shit</h2>
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
    </>
  );
};

export default Creepy;
