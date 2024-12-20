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
        backgroundImage: `url('data:image/jpeg;base64,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')`,
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
          Levée Topographique par Drone
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Réalisation de Levés Topographiques de Haute Précision
        </h1>
        <p className="max-w-xl text-gray-200 text-sm md:text-base mb-8">
          Grâce à nos drones de dernière génération, nous réalisons des levés topographiques de haute précision,
          créant des cartes détaillées et des modèles numériques du terrain (MNT) en 3D pour des projets complexes.
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
                  src="https://www.youtube.com/embed/tln-Slq_7C8"
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
