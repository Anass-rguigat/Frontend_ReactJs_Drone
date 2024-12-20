import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FirstSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src="https://video.wixstatic.com/video/9e80ac_9206a19ba544486483a8b7c393f80a08/1080p/mp4/file.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        {/* Title Animation with TypeAnimation */}
        <motion.h1
          className="text-6xl font-bold leading-tight mb-4 w-[90%] md:w-[50%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              'Illuminez Vos Événements',
              2000, 
              'avec des Spectacles Aériens', 
              2000, 
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.h1>

        {/* Description Animation */}
        <motion.p
          className="text-lg text-gray-300 mb-8 w-[90%] md:w-[40%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Bienvenue chez Drone Cast Company, où l'innovation rencontre le ciel. En tant que prestataire de premier plan de spectacles aériens avec drones, nous nous spécialisons dans la transformation des moments ordinaires en expériences extraordinaires.
        </motion.p>

        {/* Button Animation */}
        <motion.button
          style={{ backgroundColor: "#48bdd2" }}
          className="relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all ml-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-white pr-3"><Link to="/contact">Contact-nous</Link></span>
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
        </motion.button>
      </div>
    </div>
  );
};

export default FirstSection;
