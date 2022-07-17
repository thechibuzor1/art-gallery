import React from "react";
import "./Header.css";
import { IoMdPhotos } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>
          <span class="sign__word">The_Chibuzor's Art.</span>
        </h1>
        <h5 className="text-light">I'm going to blow your mind.</h5>
        <h2>
          Updated album available here:
          <a
            href="https://photos.google.com/share/AF1QipPySAB1mGBpIB970-JjSav4zrvhxes93CnBVDeDEcJCEdW5cBEq7X-yGv-OYGoOaw?key=aWhWcmxQcm0zQnRkTWtQTnFRTjJ1VmVnN1RuODNn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdPhotos className="album_icon"/>
          </a>
        </h2>
      </div>
    </header>
  );
};

export default Header;
