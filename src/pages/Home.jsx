import React from "react";
import ParticleSphere from "../components/Home/FirstSection";
import AboutUs from "../components/Home/ThirdSection";
import OurService from "../components/Home/Fourth";
import WhyUs from "../components/Home/FifthSection";
import Shows from "../components/Home/SeventhSection";
import ScrollInfinit from "../components/Home/EightSection";
import Faq from "../components/Home/NinetySection";
import Footer from "../components/Footer/Footer";
import CardsGrid from "../components/Home/CardsGrid";
import ScrollInfinitSecond from "../components/Home/EightSectionSecond";


const Home = () => {
  return (
    <>
  
        <ParticleSphere />
        
        <AboutUs />
      <OurService />
      
      <CardsGrid />
      <Shows />
      <ScrollInfinit
        title="Nos Clients"
        phrase="Nos solutions sont adoptées par les leaders du marché."
      /> 
      <WhyUs />
      <ScrollInfinitSecond
        title="Partenaires"
        phrase="Nous avons gagné la confiance des équipes les plus visionnaires à l’échelle mondiale."
      />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
