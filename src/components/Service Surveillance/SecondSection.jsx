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
          Surveillance & Inspection industrielle
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Inspection Aérienne : Une Technologie de Précision
        </h1>
        <p className="text-gray-300 max-w-3xl">
          Le drone est un outil idéal pour inspecter et effectuer un diagnostic précis des structures de bâtiments, de biens immobiliers, ou encore d'ouvrages d'art. Grâce à la captation d’images en très haute définition et en vue aérienne, il permet une visualisation optimale des éléments de construction et de déceler les défauts ou fragilités des structures. En plus, l’inspection par drone assure une sécurité totale et un coût réduit, évitant l’utilisation de nacelles, échafaudages, etc.
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
                ? "INSPECTION DES OUVRAGES D'ART"
                : index === 1
                ? "INSPECTION D'ÉOLIENNES ET CHÂTEAUX D'EAU"
                : "INSPECTIONS THERMIQUES ET SUIVI DE CHANTIER"}
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Nos drones permettent une inspection précise des ouvrages d'art, facilitant la détection de fissures ou autres défauts structurels à distance, tout en garantissant la sécurité."
                : index === 1
                ? "Grâce aux drones, nous réalisons des inspections aériennes d’éoliennes et de châteaux d’eau, réduisant les risques pour les techniciens tout en offrant une analyse détaillée."
                : "Les inspections thermiques et les suivis de chantier sont rendus plus efficaces grâce aux drones, offrant des résultats précis pour une gestion optimale des projets de construction."}
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
                  ? "data:image/jpeg;base64,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"
                  : index === 1
                  ? "https://colonyroofers.com/hs-fs/hubfs/Commercial%20Roofing%20Drone%20Inspection.jpg?width=900&height=400&name=Commercial%20Roofing%20Drone%20Inspection.jpg"
                  : "https://www.si-drone.fr/wp-content/uploads/2023/07/Inspection-de-batiments-par-drone.webp"
              }
              alt={`Inspection Feature ${index + 1}`}
              className="rounded-2xl object-cover w-full h-72"
            />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SecondSection;
