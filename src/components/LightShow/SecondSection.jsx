import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SecondSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const slides = [
    {
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/63e52de8d10880064dde1060/1697569214873-N7HBYO7DHBERLD6V3DZT/IMG_1479.jpg",
      title: "100 DRONES",
      subtitle: "Un Événement Privé Éblouissant",
      description:
        "Découvrez la puissance et les capacités de notre flotte de 100 drones, parfait pour les événements privés. Ce pack est conçu pour impressionner vos invités avec des performances aériennes captivantes et un spectacle lumineux qui saura marquer les esprits.",
    },
    {
      imgUrl:
        "https://skyelementsdrones.com/wp-content/uploads/2023/08/sacramento-drone-show.jpg",
      title: "200 DRONES",
      subtitle: "Une Activation de Marque à Couper le Souffle",
      description:
        "Pour les activations de grande marque qui exigent complexité et un facteur « WOW » garanti, notre pack de 300 drones offre une résolution inégalée. Ce choix ultime propulse votre événement ou votre publicité vers de nouveaux sommets, créant une expérience immersive qui captivera votre public.",
    },
    {
      imgUrl: "https://i.ytimg.com/vi/ZI-qtMTS8fM/maxresdefault.jpg",
      title: "500 DRONES",
      subtitle: "L'Apogée du Divertissement Aérien",
      description:
        "Faites passer votre événement au niveau supérieur avec notre forfait 500 drones. Offrant une expérience immersive et une résolution exceptionnelle, ce pack représente le summum du divertissement et de la publicité. C'est le choix idéal pour ceux qui souhaitent laisser une empreinte indélébile dans l'esprit des spectateurs.",
    },
    
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      goToNextSlide();
      setStartX(null);
    } else if (diff < -50) {
      goToPrevSlide();
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || startX === null) return;
    const currentX = e.clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      goToNextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      goToPrevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
  };

  return (
    <div
      className="relative bg-black h-screen overflow-hidden"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].imgUrl})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl px-4">
            <h2 className="text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <h3 className="text-3xl font-semibold mb-6">
              {slides[currentSlide].subtitle}
            </h3>
            <p className="text-xl">{slides[currentSlide].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-colors"
      >
        &larr;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-colors"
      >
        &rarr;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
