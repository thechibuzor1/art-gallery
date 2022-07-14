import React, { useState } from "react";
import "./Explore.css";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "../../assests/Porto/1.jpg";
import img2 from "../../assests/Porto/2.jpg";
import img3 from "../../assests/Porto/3.jpg";
import img4 from "../../assests/Porto/4.jpg";
import img5 from "../../assests/Porto/5.jpg";
import img6 from "../../assests/Porto/6.jpg";
import img7 from "../../assests/Porto/7.jpg";
import img8 from "../../assests/Porto/8.jpg";
import img9 from "../../assests/Porto/9.jpg";
import img10 from "../../assests/Porto/10.jpg";
import img11 from "../../assests/Porto/11.jpg";
import img12 from "../../assests/Porto/12.jpg";
import img13 from "../../assests/Porto/13.jpg";
import img14 from "../../assests/Porto/14.jpg";
import img15 from "../../assests/Porto/15.jpg";
import img16 from "../../assests/Porto/16.jpg";
import img17 from "../../assests/Porto/17.jpg";
import img18 from "../../assests/Porto/18.jpg";
import img19 from "../../assests/Porto/19.jpg";
import img20 from "../../assests/Porto/20.jpg";
import img21 from "../../assests/Porto/21.jpg";
import img22 from "../../assests/Porto/22.jpg";
import img23 from "../../assests/Porto/23.jpg";
import img24 from "../../assests/Porto/24.jpg";
import img25 from "../../assests/Porto/25.jpg";
import img26 from "../../assests/Porto/26.jpg";
import img27 from "../../assests/Porto/27.jpg";
import img28 from "../../assests/Porto/28.jpg";
import img29 from "../../assests/Porto/29.jpg";
import img30 from "../../assests/Porto/30.jpg";
import img31 from "../../assests/Porto/31.jpg";
import img32 from "../../assests/Porto/32.jpg";
import img33 from "../../assests/Porto/33.jpg";
import img34 from "../../assests/Porto/34.jpg";
import img35 from "../../assests/Porto/35.jpg";
import img36 from "../../assests/Porto/36.jpg";
import img37 from "../../assests/Porto/37.jpg";
import img38 from "../../assests/Porto/38.jpg";
import img39 from "../../assests/Porto/39.jpg";
import img40 from "../../assests/Porto/40.jpg";
import img41 from "../../assests/Porto/41.jpg";
import img42 from "../../assests/Porto/42.jpg";
import img43 from "../../assests/Porto/43.jpg";
import img44 from "../../assests/Porto/44.jpg";
import img45 from "../../assests/Porto/45.jpg";
import img46 from "../../assests/Porto/46.jpg";
import img47 from "../../assests/Porto/47.jpg";
import img48 from "../../assests/Porto/48.jpg";
import img49 from "../../assests/Porto/49.jpg";
import img50 from "../../assests/Porto/50.jpg";
import img51 from "../../assests/Porto/51.jpg";
import img52 from "../../assests/Porto/52.jpg";
import img53 from "../../assests/Porto/53.jpg";
import img54 from "../../assests/Porto/54.jpg";
import img55 from "../../assests/Porto/55.jpg";
import img56 from "../../assests/Porto/56.jpg";
import img57 from "../../assests/Porto/57.jpg";
import img58 from "../../assests/Porto/58.jpg";
import img59 from "../../assests/Porto/59.jpg";
import img60 from "../../assests/Porto/60.jpg";
import img61 from "../../assests/Porto/61.jpg";
import img62 from "../../assests/Porto/62.jpg";
import img63 from "../../assests/Porto/63.jpg";
import img64 from "../../assests/Porto/64.jpg";
import img65 from "../../assests/Porto/65.jpg";
import img66 from "../../assests/Porto/66.jpg";
import img67 from "../../assests/Porto/67.jpg";
import img68 from "../../assests/Porto/68.jpg";
import img69 from "../../assests/Porto/69.jpg";
import img70 from "../../assests/Porto/70.jpg";
import img71 from "../../assests/Porto/71.jpg";
import img72 from "../../assests/Porto/72.jpg";
import img73 from "../../assests/Porto/73.jpg";
import img74 from "../../assests/Porto/74.jpg";
import img75 from "../../assests/Porto/75.jpg";
import img76 from "../../assests/Porto/76.jpg";
import img77 from "../../assests/Porto/77.jpg";
import img78 from "../../assests/Porto/78.jpg";
import img79 from "../../assests/Porto/79.jpg";
import img80 from "../../assests/Porto/80.jpg";
import img81 from "../../assests/Porto/81.jpg";
import img82 from "../../assests/Porto/82.jpg";
import img83 from "../../assests/Porto/83.jpg";
import img84 from "../../assests/Porto/84.jpg";
import img85 from "../../assests/Porto/85.jpg";
import img86 from "../../assests/Porto/86.jpg";
import img87 from "../../assests/Porto/87.jpg";
import img88 from "../../assests/Porto/88.jpg";
import img89 from "../../assests/Porto/89.jpg";
import img90 from "../../assests/Porto/90.jpg";
import img91 from "../../assests/Porto/91.jpg";

function Explore() {
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
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
    {
      id: 31,
      imgSrc: img31,
    },
    {
      id: 32,
      imgSrc: img32,
    },
    {
      id: 33,
      imgSrc: img33,
    },
    {
      id: 34,
      imgSrc: img34,
    },
    {
      id: 35,
      imgSrc: img35,
    },
    {
      id: 36,
      imgSrc: img36,
    },
    {
      id: 37,
      imgSrc: img37,
    },
    {
      id: 38,
      imgSrc: img38,
    },
    {
      id: 39,
      imgSrc: img39,
    },
    {
      id: 40,
      imgSrc: img40,
    },
    {
      id: 41,
      imgSrc: img41,
    },
    {
      id: 42,
      imgSrc: img42,
    },
    {
      id: 43,
      imgSrc: img43,
    },
    {
      id: 44,
      imgSrc: img44,
    },
    {
      id: 45,
      imgSrc: img45,
    },
    {
      id: 46,
      imgSrc: img46,
    },
    {
      id: 47,
      imgSrc: img47,
    },
    {
      id: 48,
      imgSrc: img48,
    },
    {
      id: 49,
      imgSrc: img49,
    },
    {
      id: 50,
      imgSrc: img50,
    },
    {
      id: 51,
      imgSrc: img51,
    },
    {
      id: 52,
      imgSrc: img52,
    },
    {
      id: 53,
      imgSrc: img53,
    },
    {
      id: 54,
      imgSrc: img54,
    },
    {
      id: 55,
      imgSrc: img55,
    },
    {
      id: 56,
      imgSrc: img56,
    },
    {
      id: 57,
      imgSrc: img57,
    },
    {
      id: 58,
      imgSrc: img58,
    },
    {
      id: 59,
      imgSrc: img59,
    },
    {
      id: 60,
      imgSrc: img60,
    },
    {
      id: 61,
      imgSrc: img61,
    },
    {
      id: 62,
      imgSrc: img62,
    },
    {
      id: 63,
      imgSrc: img63,
    },
    {
      id: 64,
      imgSrc: img64,
    },
    {
      id: 65,
      imgSrc: img65,
    },
    {
      id: 66,
      imgSrc: img66,
    },
    {
      id: 67,
      imgSrc: img67,
    },
    {
      id: 68,
      imgSrc: img68,
    },
    {
      id: 69,
      imgSrc: img69,
    },
    {
      id: 70,
      imgSrc: img70,
    },
    {
      id: 71,
      imgSrc: img71,
    },
    {
      id: 72,
      imgSrc: img72,
    },
    {
      id: 72,
      imgSrc: img72,
    },
    {
      id: 73,
      imgSrc: img73,
    },
    {
      id: 74,
      imgSrc: img74,
    },
    {
      id: 75,
      imgSrc: img75,
    },
    {
      id: 76,
      imgSrc: img76,
    },
    {
      id: 77,
      imgSrc: img77,
    },
    {
      id: 78,
      imgSrc: img78,
    },
    {
      id: 79,
      imgSrc: img79,
    },
    {
      id: 80,
      imgSrc: img80,
    },
    {
      id: 81,
      imgSrc: img81,
    },
    {
      id: 82,
      imgSrc: img82,
    },
    {
      id: 83,
      imgSrc: img83,
    },
    {
      id: 84,
      imgSrc: img84,
    },
    {
      id: 85,
      imgSrc: img85,
    },
    {
      id: 86,
      imgSrc: img86,
    },
    {
      id: 87,
      imgSrc: img87,
    },
    {
      id: 88,
      imgSrc: img88,
    },
    {
      id: 89,
      imgSrc: img89,
    },
    {
      id: 90,
      imgSrc: img90,
    },
    {
      id: 91,
      imgSrc: img91,
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
        <h2>Explore</h2>
        <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt=""/>
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
                <img src={item.imgSrc} style={{ width: "100%" }} alt=""/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Explore;
