import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <motion.section
      className="bg-white text-black py-2 px-4"
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
          Services
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-black leading-tight">
          Services de Précision pour les Mines et Carrières
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Nous mettons à votre disposition des services de relevés topographiques précis, de modélisation 3D et de gestion des risques pour améliorer vos opérations minières. Grâce aux drones, nous vous offrons des solutions qui optimisent la gestion des stocks et la sécurité sur vos sites.
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
                ? "SURVEILLANCE ET GESTION DES RISQUES"
                : index === 1
                ? "RELEVÉS TOPOGRAPHIQUES DE PRÉCISION"
                : "OPTIMISATION DE LA GESTION DES STOCKS"}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Nos drones permettent de surveiller l’évolution des risques environnementaux, de simuler les risques d'inondation et d'analyser l'implantation des charges explosives en toute sécurité."
                : index === 1
                ? "Grâce à la modélisation 3D, nous créons des cartes détaillées de vos sites pour une meilleure gestion des travaux d’extraction et de terrassement."
                : "Les drones collectent des données précises pour le calcul des volumes de matériaux extraits, vous offrant une gestion optimisée des stocks de granulats."}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 max-w-full">
          <img
              src={
                index === 0
                  ? "https://energiemines.ma/wp-content/uploads/2020/10/DRSTONE1-743x405.jpg"
                  : index === 1
                  ? "https://macawgroup.com.co/wp-content/themes/yootheme/cache/DRONEMINERIA-2956d5a9.jpeg"
                  : "https://www.gruasyaparejos.com/wp-content/uploads/2019/08/Fotogrametr%C3%ADa-con-Drones-2.jpg"
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
