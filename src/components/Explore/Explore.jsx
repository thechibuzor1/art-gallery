import React, { useState } from "react";
import "./Explore.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";

import img1 from "../../assests/Porto/characters/11.jpg";
import img2 from "../../assests/Porto/creepy/19.jpg";
import img3 from "../../assests/Porto/darkdays/6.jpg";
import img4 from "../../assests/Porto/faces/14.jpg";
import img5 from "../../assests/Porto/masterpiece/7.jpg";
import img6 from "../../assests/Porto/tati/6.jpg";
import img7 from "../../assests/Porto/weird/8.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Characters",
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  }
];

function Explore() {
  const navigate = useNavigate();
   

  return (
    <>
      <div className="explore">
        <h2>Categories</h2>
        <div className="categories">
 
        <Link to="/characters">
          <div className="category">
            <img className="img1" src={img1} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/characters");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Characters</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/creepy">
          <div className="category">
            <img className="img1" src={img2} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/creepy");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Creepy</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/darktimes">
          <div className="category">
            <img className="img1" src={img3} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/darktimes");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Dark Days</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/faces">
          <div className="category">
            <img className="img1" src={img4} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/faces");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Faces</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/tati">
          <div className="category">
            <img className="img1" src={img6} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/tati");
              }}
            >
              <span style={{ color: "white" }}>
                <b>The Land Of Illumitatiana</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/masterpieces">
          <div className="category">
            <img className="img1" src={img5} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/masterpieces");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Masterpieces</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/weirdshit">
          <div className="category">
            <img className="img1" src={img7} alt="" />
            <button
              className="category__button"
              onClick={() => {
                navigate("/weirdshit");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Weird Shit</b>
              </span>
            </button>
          </div>
        </Link>

      </div>
        </div>
 
    </>
  );
}

export default Explore;
