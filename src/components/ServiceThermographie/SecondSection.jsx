import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SecondSection = () => {
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
          Inspection Thermique par Drone
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Processus d'Inspection Thermographique
        </h1>
        <p className="text-gray-300 max-w-3xl">
          Nos drones utilisent la thermographie infrarouge pour détecter les différences de température et identifier des anomalies dans diverses structures. Ce processus permet une analyse rapide et précise, tout en évitant les méthodes traditionnelles plus coûteuses et lentes.
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
                ? "Inspection des Panneaux Solaires"
                : index === 1
                ? "Détection des Ponts Thermiques"
                : "Suivi Thermographique de Chantier"}
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Grâce à la thermographie, nous pouvons détecter les défaillances ou dysfonctionnements des panneaux photovoltaïques, optimisant ainsi la gestion de votre installation."
                : index === 1
                ? "Identifiez rapidement les zones à isoler ou réparer grâce aux images thermiques qui mettent en évidence les pertes thermiques dans les bâtiments."
                : "La thermographie permet de suivre l’évolution des projets de construction et d'identifier d’éventuelles anomalies pendant les phases de chantier."}
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
                  ? "https://www.abot.fr/img/cms/Pages/Applications/Prise-de-vue-thermique/Application-Prise-de-vue-thermique-drone-quels-secteurs-agriculture.jpg"
                  : index === 1
                  ? "https://drdrone.fr/wp-content/uploads/2022/11/thermographie-par-drone.jpeg"
                  : "https://www.dronelis.com/wp-content/uploads/2024/01/thermographie-batiment-drone-4-1.png"
              }
              alt={`Inspection Thermographique ${index + 1}`}
              className="rounded-2xl object-cover w-full h-72 sm:h-96"
            />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SecondSection;
