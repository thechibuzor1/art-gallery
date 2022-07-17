import React from "react";
import Explore from "../components/Explore/Explore";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Featured />
      <Explore />
    </>
  );
};

export default Home;
