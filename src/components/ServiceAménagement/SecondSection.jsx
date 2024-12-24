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
          Services de Drones pour l'Aménagement et la Reconstruction
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Les drones sont un outil incontournable pour les études topographiques et les analyses post-sinistre. Grâce à leur capacité à capturer des images haute définition et des ortho-photos, nos drones soutiennent vos projets d'urbanisme et de reconstruction.
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
                ? "LEVÉS TOPOGRAPHIQUES PRÉCIS"
                : index === 1
                ? "ÉVALUATION POST-SINISTRE"
                : "PLANS D'AMÉNAGEMENT URBAIN"}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {index === 0
                ? "Nos drones permettent de réaliser des levés topographiques précis, essentiels pour les projets d'aménagement du territoire et d'urbanisme."
                : index === 1
                ? "Après une catastrophe naturelle, nos drones assurent une évaluation rapide et précise des dommages pour une meilleure gestion des interventions."
                : "Nous réalisons des ortho-photos et des cartes détaillées pour faciliter la conception et la mise en œuvre de projets d'urbanisme."}
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
                  ? "https://www.studioflytechnologie.fr/wp-content/uploads/2022/08/Ortho-430x248-1.jpg"
                  : index === 1
                  ? "https://media.licdn.com/dms/image/D5612AQFvZ7ZpyTnk-A/article-cover_image-shrink_600_2000/0/1695532081098?e=2147483647&v=beta&t=NdBcX4EK2IGTuYgOg8nfGvnjbVFqpMPOoq45uJT3fR4"
                  : "https://consortiq.com/wp-content/uploads/2021/06/AdobeStock_265970760.jpg"
              }
              alt={`Service-${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SecondSection;
