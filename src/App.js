import React from "react";
import Explore from "./components/Explore/Explore";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Featured />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
