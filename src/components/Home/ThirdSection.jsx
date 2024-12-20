import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const videoId = "hNcMDoBmhGA";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-black text-white px-6 sm:px-12 lg:px-20 py-12 pt-20"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="flex flex-col lg:flex-row items-center lg:items-start" variants={itemVariants}>
        {/* Left Section: Video Thumbnail */}
        <motion.div
          className="relative w-full h-[500px] lg:w-1/2 cursor-pointer group"
          onClick={openModal}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Drone Show"
            className="absolute inset-0 w-full h-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="flex flex-col items-center">
              <button className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="mt-4 text-white font-medium text-center">
                Lancer la vidéo de démonstration
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Description */}
        <motion.div className="mt-8 lg:mt-0 lg:ml-12 lg:w-1/2" variants={itemVariants}>
          <p style={{ color: "#48bdd2" }} className="uppercase text-sm font-bold mb-4">
            À Propos
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Découvrez Notre Univers
          </h1>
          <p className="text-gray-400 mb-6">
          Nous vous offrons un spectacle de drones lumineux clé en main, alliant créativité artistique et expertise opérationnelle, pour des événements uniques et mémorables.
          </p>
          <p className="text-gray-400 mb-6">
          Notre équipe d’artistes talentueux, soutenue par une technologie de pointe, personnalise chaque show selon vos besoins.
          </p>
          <p className="text-gray-400 mb-6">
          De la conception à la réalisation, nous garantissons un accompagnement complet, tout en adoptant une démarche éco-responsable pour des performances impressionnantes et respectueuses de l’environnement.
          </p>
          <Link
          to="/Aboutus"
            style={{ backgroundColor: "#48bdd2" }}
            className="relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
          >
            <span className="text-white pr-5">Plus Info</span>
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
          </Link>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-black rounded-lg w-[90%] sm:w-[75%] lg:w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-400 text-2xl"
            >
              ✖
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AboutUs;
