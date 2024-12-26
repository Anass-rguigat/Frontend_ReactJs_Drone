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
          Comment se déroule un Spectacle de Drones ?
        </h1>
        <p className="text-gray-800 text-lg">
          L'organisation d'un spectacle de drones prend en moyenne{" "}
          <span className="font-bold">60 jours</span>, de la première
          consultation jusqu'à la performance finale.
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
          {["Consultation Initiale", "Phase de Création", "Exécution et Validation"].map((step, index) => (
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
                    ? "Nous entamons la discussion pour comprendre vos besoins et établir un cahier des charges."
                    : index === 1
                    ? "Nous créons un scénario unique et ajustons les aspects techniques pour une prestation spectaculaire."
                    : "Nous validons les derniers détails, effectuons des répétitions et mettons en place le spectacle en conditions réelles."}
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
            src="https://tudronecolombia.com/wp-content/uploads/2023/05/DRONE-GPS.jpg"
            alt="Drone Show"
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
          La sécurité est primordiale dans l'organisation de nos spectacles de drones. Nous utilisons un contrôle intelligent pour assurer une synchronisation parfaite de tous les drones et minimiser les risques. Nos équipes s'occupent également des démarches administratives et des autorisations nécessaires pour garantir le respect des réglementations. Chaque spectacle se déroule dans une zone de sécurité dédiée.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
