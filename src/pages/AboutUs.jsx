import React from "react";
import FirstSection from "../components/AboutUs/FirstSection";
import ScrollInfinit from "../components/Home/EightSection";
import WhyUs from "../components/Home/FifthSection";
import SecondSection from "../components/AboutUs/SecondSection";
import Footer from "../components/Footer/Footer";
import ScrollInfinitSecond from "../components/Home/EightSectionSecond";

const AboutUs = () => {
  return (
    <>
    <FirstSection />
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
      <SecondSection />
      <Footer />
    </>
  )
};

export default AboutUs;
