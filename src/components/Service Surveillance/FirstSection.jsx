import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FirstSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <motion.div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://st5.depositphotos.com/8852212/66657/i/450/depositphotos_666574002-stock-photo-drone-construction-site-video-surveillance.jpg)', 
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p style={{ color: "#48bdd2" }} className="font-semibold text-lg uppercase mb-2">
          SURVEILLANCE & INSPECTION INDUSTRIELLE PAR DRONE
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Inspection Industrielle avec Drones
        </h1>
        <p className="max-w-xl text-gray-200 text-sm md:text-base mb-8">
          L'inspection des infrastructures industrielles, telles que les bâtiments, les ouvrages d'art, et les éoliennes, devient plus rapide et précise grâce aux drones. Équipés de capteurs haute définition et de systèmes GPS avancés, nos drones réalisent des inspections aériennes de qualité, permettant de repérer les défauts ou fragilités des structures, tout en assurant la sécurité de l'opération et une réduction des coûts, en évitant l'utilisation d'échafaudages ou de nacelles.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            style={{ backgroundColor: "#48bdd2" }}
            className="relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
          >
            <span className="text-white pr-5"><Link to="/contact">Contact</Link></span>
            <span className="absolute inset-y-0 right-4 flex items-center transition-transform duration-300 translate-x-0 group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          {/* Video Button */}
          <button
            onClick={openModal}
            className="flex items-center gap-2 border-2 border-royalBlue hover:bg-royalBlue text-white py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            <span>Vidéo de Présentation</span>
            <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="modal-overlay"
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="relative bg-black w-full max-w-3xl rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/1Y1M0O1ir7I"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FirstSection;
