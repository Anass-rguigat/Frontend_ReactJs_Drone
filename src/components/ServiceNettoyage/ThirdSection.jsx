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
          Découvrez l'innovation derrière nos spectacles de drones !
        </h1>
        <p className="text-gray-400 text-lg">
          Chaque spectacle de drones nécessite une organisation minutieuse et
          un processus créatif qui peut prendre jusqu'à <span className="font-bold">60 jours</span>{" "}
          pour être réalisé de manière optimale.
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
          {["Consultation Initiale", "Étape de Conception", "Validation et Exécution"].map((step, index) => (
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
                    ? "Nous discutons de vos attentes et besoins pour assurer un show personnalisé."
                    : index === 1
                    ? "Nous élaborons un scénario unique et ajustons les aspects techniques pour un résultat parfait."
                    : "Une fois validé, nous réalisons les répétitions et organisons la mise en place du spectacle."}
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
            src="https://www.si-drone.fr/wp-content/uploads/2022/03/1647194479571-819x1024.jpg"
            alt="Drone Show"
            className="w-full h-auto rounded-lg object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Security and Compliance */}
      <motion.div
        className="w-[60%] bg-royalBlue p-6 rounded-lg mt-8 lg:mt-12 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-4 text-black">Sécurité et Conformité</h3>
        <p className="leading-relaxed text-black">
          La sécurité est au cœur de nos préoccupations. Nous utilisons des
          technologies avancées de contrôle pour assurer une parfaite
          synchronisation des drones, minimisant ainsi tous risques. Nous nous
          chargeons également de toutes les démarches administratives nécessaires
          pour garantir la conformité de nos spectacles, en respectant les
          réglementations locales. Chaque événement bénéficie d'une zone de
          sécurité dédiée, assurant la tranquillité d'esprit de tous.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
