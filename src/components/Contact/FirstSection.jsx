import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const lineAnimationVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const FirstSection = () => {
  const [email, setEmail] = useState("");
  const [nomComplet, setNomComplet] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/", {
        params: {
          email,
          nomComplet,
          telephone,
          message,
        },
      });
      setResponseMessage("Message envoyé avec succès!");
    } catch (error) {
      setResponseMessage("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-8 w-full max-w-5xl"
        variants={fadeInVariants}
      >
        <motion.div className="space-y-6">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-teal-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            CONTACTEZ-NOUS
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nous sommes à votre écoute pour toute question ou demande concernant nos services. Que ce soit pour organiser un spectacle de drones, obtenir des informations sur nos prestations ou discuter d'un projet personnalisé, nous serons ravis de vous répondre.
          </motion.p>

          <motion.div className="space-y-4">
            <motion.div
              className="flex items-center space-x-4 transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-teal-400 text-2xl">📍</span>
              <div>
                <p className="font-bold text-teal-400">Adresse</p>
                <p>Rue Ardanne, Imm 14, Appt 8, Mahaj Ryad - 10000 Rabat, Maroc</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-teal-400 text-2xl">📞</span>
              <div>
                <p className="font-bold text-teal-400">Téléphone</p>
                <p>+212 537 713 659</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-teal-400 text-2xl">✉️</span>
              <div>
                <p className="font-bold text-teal-400">Email</p>
                <p>contact@dronecast.io</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="flex space-x-4 mt-4 text-teal-400">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition duration-300 transform hover:scale-125"
              whileHover={{ rotate: 360 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition duration-300 transform hover:scale-125"
              whileHover={{ rotate: 360 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition duration-300 transform hover:scale-125"
              whileHover={{ rotate: 360 }}
            >
              <FaTiktok />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#14b8a6"
              strokeWidth="2"
              variants={lineAnimationVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="100%"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="#14b8a6"
              strokeWidth="2"
              variants={lineAnimationVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="100%"
              y1="100%"
              x2="0"
              y2="100%"
              stroke="#14b8a6"
              strokeWidth="2"
              variants={lineAnimationVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="0"
              y1="100%"
              x2="0"
              y2="0"
              stroke="#14b8a6"
              strokeWidth="2"
              variants={lineAnimationVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>

          <h2 className="text-2xl font-bold mb-4 relative z-10">ENVOYER UN MESSAGE</h2>
          <motion.form
            onSubmit={sendMail}
            className="space-y-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-bold">Nom Complet</label>
              <input
                onChange={(e) => setNomComplet(e.target.value)}
                type="text"
                value={nomComplet}
                className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-bold">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-bold">Numéro de téléphone</label>
              <input
                onChange={(e) => setTelephone(e.target.value)}
                type="tel"
                value={telephone}
                className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-bold">Écrivez votre message...</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="4"
                className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </motion.button>
          </motion.form>

          {responseMessage && (
            <div className="mt-4 text-center text-teal-400">
              {responseMessage}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FirstSection;
