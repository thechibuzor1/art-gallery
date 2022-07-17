import React, { useState } from "react";
import "../components/Explore/Explore.css";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "../assests/Porto/tati/1.jpg";
import img2 from "../assests/Porto/tati/2.jpg";
import img3 from "../assests/Porto/tati/3.jpg";
import img4 from "../assests/Porto/tati/4.jpg";
import img5 from "../assests/Porto/tati/5.jpg";
import img6 from "../assests/Porto/tati/6.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdArrowRoundBack } from "react-icons/io";

const Tati = () => {
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
        <IoMdArrowRoundBack className="back_button" onClick={() => window.history.back()}/>
        <h2>The Land of Illumitatiana</h2>
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

export default Tati;
