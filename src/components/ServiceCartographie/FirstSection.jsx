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
        backgroundImage: `url('data:image/jpeg;base64,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`,
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
          SERVICES
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Cartographie Aérienne par Drone
        </h1>
        <p className="max-w-xl text-gray-200 text-sm md:text-base mb-8">
          Profitez de la rapidité et de la précision des drones pour réaliser des cartographies aériennes adaptées à de nombreux secteurs professionnels. 
          Grâce à des GPS avancés et des capteurs spécialisés, nos drones permettent de produire des cartes en 2D ou en 3D d'une grande précision, idéales pour l'agriculture, les travaux publics, et bien plus encore.
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
                  src="https://www.youtube.com/embed/0IbVgGdj8cA"
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
