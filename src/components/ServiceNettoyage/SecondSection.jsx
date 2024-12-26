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
        <p
          className="text-redOne uppercase text-xl font-bold mb-4"
        >
          Service
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-black leading-tight">
          Services sur Mesure pour Réaliser Vos Ambitions
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Notre service d’agriculture de précision par drone est à la pointe de
          l’innovation pour optimiser la gestion de vos exploitations agricoles.
          Équipés des dernières technologies de capteurs et de caméras haute
          résolution, nos drones permettent une collecte de données détaillées
          pour surveiller vos cultures, gérer les ressources et améliorer vos
          rendements tout en réduisant l’impact environnemental.
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
                ? "SURVEILLANCE INTELLIGENTE DES CULTURES"
                : index === 1
                ? "OPTIMISATION DE L’IRRIGATION"
                : "PULVÉRISATION CIBLÉE ET SEMIS AUTOMATISÉ"}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Nos drones équipés de caméras multispectrales et infrarouges permettent de surveiller vos cultures en temps réel. Ils identifient les maladies, les carences en nutriments et les zones de stress, vous permettant d’intervenir rapidement pour éviter les pertes."
                : index === 1
                ? "Grâce aux capteurs d’humidité embarqués, nos drones détectent les besoins en eau de chaque parcelle de vos champs. Cette technologie optimise l’irrigation, réduit le gaspillage d’eau et garantit une répartition uniforme."
                : "Nos drones assurent une pulvérisation ciblée des pesticides et fertilisants, limitant l’usage de produits chimiques. Ils offrent également un semis automatisé rapide et homogène sur de vastes superficies."}
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
                  ? "https://irp.cdn-website.com/744791a1/dms3rep/multi/Drone+HP_Bardage_2.jpg"
                  : index === 1
                  ? "https://servi-drones.fr/wp-content/uploads/2020/11/IMG_0685_nettoyee1280_surex-e1605019945511.jpg"
                  : "https://www.drone-malin.com/medias/images/drone-pour-pulverisation-1.jpg"
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
