import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <motion.section
      className="bg-secondWhite text-black py-2 px-4"
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
        <p className="text-redOne uppercase text-xl font-bold mb-4">
          Service
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-black leading-tight">
          Cartographie Aérienne Précise et Polyvalente
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Nos drones équipés de capteurs avancés permettent de réaliser des cartographies précises en 2D ou en 3D. Ces technologies sont particulièrement utiles pour la gestion des chantiers, l'agriculture de précision, la surveillance de zones sensibles, et plus encore. Avec des données géo-localisées et une possibilité de mise à jour rapide, nos services sont adaptés à toutes vos exigences professionnelles.
        </p>
      </motion.div>

      {/* Cards Section */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className={`flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 bg-white shadow p-8 rounded-2xl mb-12 max-w-6xl mx-auto border-neutral-800`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="md:w-1/2 lg:pl-12">
            <h4 className="text-3xl font-bold mb-6">
              {index === 0
                ? "Suivi des Chantiers en Temps Réel"
                : index === 1
                ? "Surveillance des Zones Sensibles"
                : "Analyse de Terrain et Gestion des Ressources"}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Nos drones peuvent capturer des images précises pour suivre l'avancement de vos chantiers et fournir des mises à jour régulières, réduisant ainsi les risques et améliorant la gestion du projet."
                : index === 1
                ? "Nous utilisons des capteurs pour identifier les zones sensibles comme les zones humides ou les dénivelés du terrain, permettant ainsi une surveillance et une gestion optimisées."
                : "L'analyse de terrain par drone permet de récolter des données pour une gestion plus précise des ressources naturelles, telles que l'eau, l'énergie et les matériaux."}
            </p>
            <button
              className="bg-redOne relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
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
                  ? "https://geoinn.com/wp-content/uploads/2024/04/image-25.png"
                  : index === 1
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaj5sTu-G4J9zSU7txtnkJuHONAXSZKFggKA&s"
                  : "https://www.shutterstock.com/image-vector/mapping-drone-lidar-system-result-600nw-2508747045.jpg"
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

export default SecondSection;
