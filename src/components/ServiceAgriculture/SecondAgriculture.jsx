import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SecondAgriculture = () => {
  return (
    <motion.section
      className="bg-black text-white py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="mt-16 lg:mt-24 lg:ml-20 w-[80%] mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p
          style={{ color: "#48bdd2" }}
          className="uppercase text-sm font-bold mb-4"
        >
          Service
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Agriculture de Précision avec Drones
        </h1>
        <p className="text-gray-300 max-w-3xl">
          Grâce à des technologies avancées, nos drones permettent une surveillance optimisée des cultures,
          l’irrigation ciblée, et la pulvérisation automatisée. Réduisez votre impact environnemental tout
          en augmentant la productivité grâce à une gestion de l'eau et des ressources plus efficace.
        </p>
      </motion.div>

      {/* Cards Section */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className={`flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 bg-neutral-900/50 shadow p-8 rounded-2xl mb-12 max-w-6xl mx-auto border-neutral-800`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="md:w-1/2 lg:pl-12">
            <h4 className="text-3xl font-bold mb-6">
              {index === 0
                ? "SURVEILLANCE DES CULTURES"
                : index === 1
                ? "OPTIMISATION DE L’IRRIGATION"
                : "PULVÉRISATION CIBLÉE"}
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Nos drones surveillent en temps réel vos cultures grâce à des caméras multispectrales et infrarouges, permettant de détecter les anomalies et maladies."
                : index === 1
                ? "Grâce aux capteurs d’humidité, nos drones assurent une gestion de l’eau optimisée, permettant une irrigation plus précise et plus écologique."
                : "Les drones de pulvérisation permettent d'appliquer des produits de manière ciblée, limitant l’usage de produits chimiques et optimisant la distribution des semences."}
            </p>
            <button
              style={{ backgroundColor: "#48bdd2" }}
              className="relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
            >
              <span className="text-white pr-5"><Link to="/contact">Contact-nous</Link></span>
              <span className="absolute inset-y-0 right-4 flex items-center transition-transform duration-300 translate-x-0 group-hover:translate-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={
                index === 0
                  ? "https://www.irisonboard.com/wp-content/uploads/2022/01/Precision-Agriculture-Drone-1-scaled.jpg"
                  : index === 1
                  ? "https://enterprise.africadroneking.co.za/wp-content/uploads/2023/04/Agras-T40.png"
                  : "https://www.irisonboard.com/wp-content/uploads/2022/01/Precision-Agriculture-Drone-1-scaled.jpg"
              }
              alt={`Drone Feature ${index + 1}`}
              className="rounded-2xl object-cover w-full h-72"
            />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SecondAgriculture;
