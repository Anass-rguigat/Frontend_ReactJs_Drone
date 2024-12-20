import React from "react";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <motion.section
      className="bg-black text-white py-12 px-6 lg:px-20 flex flex-col items-center"
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
        <h2 className="text-royalBlue uppercase text-sm font-bold mb-4">
          Fonctionnement
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Processus de Cartographie Aérienne par Drone
        </h1>
        <p className="text-gray-400 text-lg">
          Découvrez comment nos drones facilitent la collecte de données et la création de cartes précises pour vos projets.
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
          {["Préparation du Parcours", "Collecte des Données", "Traitement et Livraison"].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 rounded-full bg-royalBlue flex items-center justify-center text-white font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step}</h3>
                <p className="text-gray-400">
                  {index === 0
                    ? "Définir un parcours précis à l'aide du GPS et des capteurs du drone pour assurer une couverture optimale de la zone."
                    : index === 1
                    ? "Le drone collecte des données géo-localisées, prenant des photos et mesurant des éléments du terrain pour une précision maximale."
                    : "Les données sont traitées et converties en cartes 2D ou 3D, avec des informations détaillées sur les zones analysées."}
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
            src="https://innovadrone.com/wp-content/uploads/2022/07/Surveyor-photogrammetrie-500x386.jpg"
            alt="Drone Aerial Mapping"
            className="w-full h-auto rounded-lg object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Final Call to Action */}
      <motion.div
        className="w-[60%] bg-royalBlue p-6 rounded-lg mt-8 lg:mt-12 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-4 text-black">Prêt à Transformer Vos Projets avec la Cartographie par Drone ?</h3>
        <p className="leading-relaxed text-black">
        Contactez-nous dès aujourd'hui pour en savoir plus sur nos services de cartographie aérienne et découvrez comment notre technologie peut révolutionner vos processus.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
