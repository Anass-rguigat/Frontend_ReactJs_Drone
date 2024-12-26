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
          Comment fonctionnent nos Drones pour l'Inspection Industrielle ?
        </h1>
        <p className="text-gray-800 text-lg">
          Nous utilisons des drones spécialisés pour effectuer des inspections industrielles précises. Le processus est rapide et sécurisé, tout en offrant une haute qualité d'analyse.
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
          {["Planification et Consultation", "Inspection Aérienne", "Analyse et Rapport"].map((step, index) => (
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
                <p className="text-gray-800">
                  {index === 0
                    ? "Nous analysons vos besoins et définissons un plan de vol adapté à l’inspection."
                    : index === 1
                    ? "Les drones survolent et capturent des images haute définition des infrastructures."
                    : "Les données collectées sont analysées pour fournir un rapport détaillé avec des recommandations."}
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
            src="https://st3.depositphotos.com/1000291/36235/i/450/depositphotos_362354458-stock-photo-drone-over-construction-site-video.jpg" // Vous pouvez changer l'image pour mieux correspondre à l'inspection industrielle
            alt="Inspection industrielle par drone"
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
          La sécurité est une priorité dans nos inspections industrielles. Nos drones sont équipés de technologies avancées pour garantir des opérations sécurisées. Nous nous assurons également de respecter toutes les normes réglementaires en matière d’aviation et de sécurité des infrastructures.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
