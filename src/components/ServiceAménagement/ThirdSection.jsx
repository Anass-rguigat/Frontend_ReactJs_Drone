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
        <h2 className="text-redOne  uppercase text-xl font-bold mb-4">
          Fonctionnement
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Comment les drones transforment l'aménagement du territoire et la gestion des sinistres
        </h1>
        <p className="text-gray-800 text-lg">
          Il faut généralement compter environ <span className="font-bold">60 jours</span>{" "}
          pour planifier et réaliser une mission de drone dans le cadre d'un projet d'urbanisme ou d'évaluation post-sinistre.
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
          {["Consultation Initiale", "Collecte de Données", "Analyse et Rapport"].map((step, index) => (
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
                    ? "Nous établissons un premier contact pour définir vos objectifs et les besoins spécifiques de votre projet."
                    : index === 1
                    ? "Nous utilisons des drones pour collecter des données topographiques, des images haute résolution et des mesures pour l'analyse."
                    : "Les données collectées sont analysées, et un rapport détaillé est préparé pour guider la prise de décision ou la planification."
                  }
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
            src="https://www.dartdrones.com/wp-content/uploads/2017/07/bg-mapping.jpg"
            alt="Drone Surveying"
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
          La sécurité est une priorité absolue dans l'utilisation des drones pour l'aménagement du territoire et l'évaluation des sinistres. Nous garantissons une coordination parfaite grâce à nos technologies avancées de synchronisation de drones. De plus, toutes nos missions sont menées en conformité avec les réglementations locales et nationales, en obtenant toutes les autorisations nécessaires et en assurant des zones de sécurité appropriées pour éviter tout risque.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
