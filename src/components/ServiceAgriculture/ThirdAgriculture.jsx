import React from "react";
import { motion } from "framer-motion";

const ThirdAgriculture = () => {
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
        <h2 className="text-redOne uppercase text-sm font-bold mb-4">
          Fonctionnement
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
        Drones Agricoles : Optimisation de vos Exploitations
        </h1>
        <p className="text-gray-600 text-lg">
        Découvrez comment nos drones révolutionnent l'agriculture avec une efficacité redoutable
        dans la surveillance, l'irrigation et la pulvérisation des cultures.
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
          {["Surveillance", "Optimisation de l'Irrigation", "Pulvérisation de Pesticides"].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="px-2 rounded-full bg-redOne flex items-center justify-center text-white font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step}</h3>
                <p className="text-gray-600">
                {index === 0
                    ? "Nos drones surveillent vos cultures en temps réel pour détecter maladies et stress."
                    : index === 1
                    ? "Optimisation de l'irrigation pour une gestion efficace de l'eau."
                    : "Pulvérisation précise des produits chimiques pour éviter le gaspillage."}
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
            src="https://www.telepilote.store/themes/telepilote/assets/img/agriculture-drone.jpg"
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
        <h3 className="text-xl font-bold mb-4 text-white">Sécurité et Conformité</h3>
        <p className="leading-relaxed text-white">
        Dans le cadre de l'agriculture de précision, la sécurité et la conformité sont essentielles pour garantir des opérations efficaces tout en minimisant les risques. Les drones utilisés dans nos services agricoles sont équipés de systèmes de sécurité avancés pour éviter tout incident pendant les vols. Nos opérateurs suivent des protocoles stricts pour assurer une gestion sans faille des drones, avec une surveillance en temps réel des conditions de vol et des capteurs de sécurité.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdAgriculture;
