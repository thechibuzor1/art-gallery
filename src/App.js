import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Characters from "./screens/characters";
import Creepy from "./screens/creepy";
import Darktimes from "./screens/darktimes";
import Faces from "./screens/faces";
import Home from "./screens/Home";
import Masterpiece from "./screens/masterpiece";
import Tati from "./screens/tati";
import Weirdshit from "./screens/Weirdshit";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/creepy" element={<Creepy />} />
        <Route path="/darktimes" element={<Darktimes/>} />
        <Route path="/faces" element={<Faces />} />
        <Route path="/tati" element={<Tati />} />
        <Route path="/masterpieces" element={<Masterpiece />} />
        <Route path="/weirdshit" element={<Weirdshit />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
