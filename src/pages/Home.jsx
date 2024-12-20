import React from "react";
import ParticleSphere from "../components/Home/FirstSection";
import CounterPage from "../components/Home/SecondSection";
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
      <CounterPage />
      <AboutUs />
      <OurService />
      <ScrollInfinit
        direction="left"
        title="Nos Clients"
        phrase="Nos solutions sont adoptées par les leaders du marché."
      /> 
      <WhyUs />
      <ScrollInfinitSecond
        direction="right"
        title="Partenaires"
        phrase="Nous avons gagné la confiance des équipes les plus visionnaires à l’échelle mondiale."
      />
      <CardsGrid />
      <Shows />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
