import React from "react";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <motion.section
      className="bg-white text-black py-12 px-6 lg:px-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="w-[60%] mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-redOne uppercase text-xl font-bold mb-4">
          Fonctionnement
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Drones Thermographiques : Comment fonctionne l'inspection industrielle ?
        </h1>
        <p className="text-gray-800 text-lg">
          Il faut compter environ <span className="font-bold">60 jours</span>{" "}
          pour organiser une mission complète d'inspection thermographique par drone.
        </p>
      </motion.div>

      {/* Steps and Image */}
      <motion.div
        className="w-[60%] flex flex-col lg:flex-row gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Content - Steps */}
        <div className="flex-1">
          {["Consultation Initiale", "Planification et Préparation", "Inspection et Analyse", "Rapport et Suivi"].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="px-3 py-1 rounded-full bg-redOne flex items-center justify-center text-white font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step}</h3>
                <p className="text-gray-400">
                  {index === 0
                    ? "Nous discutons de vos besoins spécifiques et définissons les objectifs d'inspection."
                    : index === 1
                    ? "Préparation des drones, des capteurs thermiques et de l'itinéraire d'inspection."
                    : index === 2
                    ? "Nous effectuons l'inspection thermique en utilisant des drones pour capturer les images et vidéos thermiques."
                    : "Nous générons un rapport détaillé et fournissons des recommandations basées sur les résultats de l'inspection."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Content - Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaV7JVY6rGRElUd0EMRc1hAuRQrqe18XecvQ&s"
            alt="Drone Inspection"
            className="w-full h-auto rounded-lg object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Security and Compliance */}
      <motion.div
        className="w-[60%] bg-redOne p-6 rounded-lg mt-8 lg:mt-12 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-4 text-black">Sécurité et Conformité</h3>
        <p className="leading-relaxed text-black">
          La sécurité est primordiale lors des inspections industrielles par drone. Nous utilisons des technologies de pointe pour garantir la stabilité des drones et éviter tout risque pendant l'opération. De plus, nous nous assurons d'obtenir toutes les autorisations nécessaires, en respectant les normes de sécurité en vigueur dans l'industrie et en veillant à la sécurité des zones inspectées.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
