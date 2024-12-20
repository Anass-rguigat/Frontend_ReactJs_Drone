import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ThirdService from "./pages/ThirdService";
import Home from "./pages/Home";
import FirstService from "./pages/FirstService";
import Realisation from "./pages/Realisation";
import LightShow from "./pages/LightShow";
import SecondService from "./pages/SecondService";
import FourthService from "./pages/FourthService";
import FifthService from "./pages/FifthService";
import SixthService from "./pages/SixthService";
import SeventhService from "./pages/SeventhService";
import EightService from "./pages/EightService";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Realisation" element={<Realisation/>} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Agriculture" element={<FirstService />} />
          <Route path="/Cartographie" element={<SecondService />} />
          <Route path="/Topographique" element={<FourthService />} />
          <Route path="/Surveillance" element={<FifthService />} />
          <Route path="/Amenagement" element={<ThirdService />} />
          <Route path="/Mines" element={<SixthService />} />
          <Route path="/Nettoyage" element={<SeventhService />} />
          <Route path="/Thermographie" element={<EightService />} />
          <Route path="/light-show" element={<LightShow />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
